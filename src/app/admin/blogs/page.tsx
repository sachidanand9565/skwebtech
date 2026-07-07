'use client';

import { useState, useEffect } from 'react';
import {
  FileText,
  Search,
  Plus,
  Trash2,
  AlertCircle,
  X,
  Edit2,
  Upload,
  Calendar,
  Eye,
  EyeOff,
  User,
  Clock,
  Sparkles
} from 'lucide-react';
import Image from 'next/image';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: {
    name: string;
    avatar?: string;
    role: string;
  };
  publishedAt: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Form State
  const [isOpen, setIsOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [category, setCategory] = useState('Web Development');
  const [authorName, setAuthorName] = useState('Sachidanand Kushwaha');
  const [authorRole, setAuthorRole] = useState('Lead Digital Strategist');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [readTime, setReadTime] = useState('5 min read');
  const [featured, setFeatured] = useState(false);

  // Preview Mode inside Editor
  const [previewMode, setPreviewMode] = useState(false);

  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/blogs');
      if (res.ok) {
        const data = await res.json();
        setBlogs(data);
      } else {
        setError('Failed to load blog posts list');
      }
    } catch (err) {
      setError('Connection failed');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleOpenAdd = () => {
    setEditingPost(null);
    setTitle('');
    setSlug('');
    setExcerpt('');
    setContent('');
    setCoverImage('');
    setCategory('Web Development');
    setAuthorName('Sachidanand Kushwaha');
    setAuthorRole('Lead Digital Strategist');
    setTags([]);
    setTagInput('');
    setReadTime('5 min read');
    setFeatured(false);
    setPreviewMode(false);
    setFormError('');
    setIsOpen(true);
  };

  const handleOpenEdit = (post: BlogPost) => {
    setEditingPost(post);
    setTitle(post.title);
    setSlug(post.slug);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setCoverImage(post.coverImage);
    setCategory(post.category);
    setAuthorName(post.author.name);
    setAuthorRole(post.author.role);
    setTags(post.tags || []);
    setTagInput('');
    setReadTime(post.readTime || '5 min read');
    setFeatured(!!post.featured);
    setPreviewMode(false);
    setFormError('');
    setIsOpen(true);
  };

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!editingPost) {
      setSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
    }
  };

  const handleAddTag = () => {
    if (!tagInput.trim()) return;
    setTags(prev => [...prev, tagInput.trim()]);
    setTagInput('');
  };

  const handleRemoveTag = (idx: number) => {
    setTags(prev => prev.filter((_, i) => i !== idx));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setFormError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setCoverImage(data.url);
      } else {
        setFormError(data.error || 'Upload failed');
      }
    } catch (err) {
      setFormError('Upload server error');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !excerpt.trim() || !content.trim() || !coverImage.trim()) {
      setFormError('Title, excerpt, content markdown, and cover image are required.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    try {
      const isEdit = !!editingPost;
      const url = '/api/admin/blogs';
      const method = isEdit ? 'PUT' : 'POST';

      const payload = {
        id: isEdit ? editingPost.id : Date.now().toString(),
        title,
        slug,
        excerpt,
        content,
        coverImage,
        category,
        author: {
          name: authorName,
          role: authorRole
        },
        tags,
        readTime,
        featured,
        publishedAt: isEdit ? editingPost.publishedAt : new Date().toISOString().split('T')[0]
      };

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        if (isEdit) {
          setBlogs(prev => prev.map(b => b.id === editingPost.id ? data.post : b));
        } else {
          setBlogs(prev => [data.post, ...prev]);
        }
        setIsOpen(false);
      } else {
        setFormError(data.error || 'Operation failed');
      }
    } catch (err) {
      setFormError('Server connection error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;

    try {
      const res = await fetch('/api/admin/blogs', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setBlogs(prev => prev.filter(b => b.id !== id));
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to delete blog');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredBlogs = blogs.filter(
    b =>
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-heading text-white tracking-tight">
            Blogs Manager
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Write content posts, share insights, publish technical guides, and manage articles.
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-750 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/10 self-start sm:self-auto"
        >
          <Plus size={16} />
          <span>Write Article</span>
        </button>
      </div>

      {error && (
        <div className="flex items-center gap-2.5 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}

      {/* Toolbar */}
      <div className="bg-slate-900 border border-white/5 rounded-2xl p-4 flex items-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search articles by title, categories..."
            className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-all text-sm"
          />
        </div>
      </div>

      {/* Blogs Table List */}
      {isLoading ? (
        <div className="p-20 flex items-center justify-center">
          <span className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : filteredBlogs.length > 0 ? (
        <div className="bg-slate-900 border border-white/5 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02] text-xs font-semibold text-slate-400 uppercase">
                  <th className="p-4">Article details</th>
                  <th className="p-4">Author</th>
                  <th className="p-4">Date</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {filteredBlogs.map(post => (
                  <tr key={post.id} className="hover:bg-white/[0.01] transition-colors">
                    <td className="p-4 max-w-[300px]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg relative overflow-hidden bg-slate-950 flex-shrink-0">
                          {post.coverImage && (
                            <img src={post.coverImage} alt="" className="object-cover w-full h-full" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-white truncate flex items-center gap-1.5">
                            {post.title}
                            {post.featured && (
                              <span className="text-[9px] bg-indigo-500/10 text-indigo-400 px-1.5 py-0.5 rounded-full border border-indigo-500/20 font-bold">
                                FEATURED
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5 truncate">{post.excerpt}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-slate-300">
                      <div className="font-medium text-white">{post.author?.name}</div>
                      <div className="text-xs text-slate-500">{post.author?.role}</div>
                    </td>
                    <td className="p-4 text-slate-450 text-xs font-mono">{post.publishedAt}</td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleOpenEdit(post)}
                          className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
                          title="Edit article"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="p-2 text-red-400 hover:text-red-300 rounded-lg hover:bg-red-500/5"
                          title="Delete article"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-slate-900 border border-white/5 rounded-2xl p-20 text-center text-slate-500 flex flex-col items-center">
          <FileText size={40} className="text-slate-700 mb-3 animate-pulse" />
          <p className="font-heading font-semibold text-white">No Blog Posts Found</p>
          <p className="text-xs text-slate-450 mt-1">Publish news updates to share insights with visitors.</p>
        </div>
      )}

      {/* Editor Modal Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-white/5 w-full max-w-4xl rounded-3xl p-6 shadow-2xl relative space-y-6 my-8">
            <div className="flex items-center justify-between">
              <h3 className="font-heading font-bold text-lg text-white">
                {editingPost ? 'Edit Blog Article' : 'Compose New Blog Post'}
              </h3>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPreviewMode(!previewMode)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-950 border border-white/5 text-slate-400 hover:text-white rounded-lg text-xs font-bold"
                >
                  {previewMode ? <EyeOff size={13} /> : <Eye size={13} />}
                  <span>{previewMode ? 'Write Mode' : 'Preview Live'}</span>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-slate-500 hover:text-white rounded-lg hover:bg-slate-800"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {formError && (
                <div className="flex items-center gap-2 p-3.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-xs">
                  <AlertCircle size={14} className="flex-shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {previewMode ? (
                /* Markdown Preview Block */
                <div className="border border-white/5 bg-slate-950 rounded-2xl p-6 max-h-[450px] overflow-y-auto space-y-6">
                  <div>
                    <span className="px-2.5 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-semibold rounded-full uppercase">
                      {category}
                    </span>
                    <h2 className="text-2xl font-bold text-white mt-2 leading-tight">{title || 'Untitled Article'}</h2>
                    <p className="text-slate-400 text-sm mt-2 italic">{excerpt || 'No description summary details provided.'}</p>
                  </div>
                  {coverImage && (
                    <div className="aspect-[21/9] rounded-xl overflow-hidden relative">
                      <img src={coverImage} alt="" className="object-cover w-full h-full" />
                    </div>
                  )}
                  <div
                    className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: content
                        ? content
                            .replace(/^### (.*$)/gim, '<h4 class="text-white font-bold text-base mt-4">$1</h4>')
                            .replace(/^## (.*$)/gim, '<h3 class="text-white font-bold text-lg mt-5">$1</h3>')
                            .replace(/^# (.*$)/gim, '<h2 class="text-white font-bold text-xl mt-6">$1</h2>')
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            .replace(/\*(.*?)\*/g, '<em>$1</em>')
                            .replace(/\n\n/g, '<p class="mt-3"></p>')
                            .replace(/\n/g, '<br/>')
                        : '<p class="text-slate-650 italic">No content written yet...</p>'
                    }}
                  />
                </div>
              ) : (
                /* Standard inputs write block */
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Post Title</label>
                      <input
                        type="text"
                        value={title}
                        onChange={e => handleTitleChange(e.target.value)}
                        placeholder="e.g. Why Your Business Needs a Website"
                        className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-650 focus:outline-none focus:border-indigo-500 text-sm font-medium"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">URL Slug</label>
                      <input
                        type="text"
                        value={slug}
                        onChange={e => setSlug(e.target.value)}
                        placeholder="e.g. why-your-business-needs-a-website"
                        className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-650 focus:outline-none focus:border-indigo-500 text-sm font-mono font-medium"
                        required
                        disabled={!!editingPost}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Excerpt (Article Short Summary)</label>
                    <input
                      type="text"
                      value={excerpt}
                      onChange={e => setExcerpt(e.target.value)}
                      placeholder="Brief excerpt detailing the article context..."
                      className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-650 focus:outline-none focus:border-indigo-500 text-sm font-medium"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Category</label>
                      <input
                        type="text"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        placeholder="e.g. Web Development, SEO"
                        className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-650 focus:outline-none focus:border-indigo-500 text-sm font-medium"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Read Duration</label>
                      <input
                        type="text"
                        value={readTime}
                        onChange={e => setReadTime(e.target.value)}
                        placeholder="e.g. 5 min read"
                        className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-650 focus:outline-none focus:border-indigo-500 text-sm font-medium"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Author Name</label>
                      <input
                        type="text"
                        value={authorName}
                        onChange={e => setAuthorName(e.target.value)}
                        placeholder="Author"
                        className="w-full px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white focus:outline-none focus:border-indigo-500 text-sm font-medium"
                        required
                      />
                    </div>
                  </div>

                  {/* Body Content Editor */}
                  <div className="space-y-1.5">
                    <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Article Body (Markdown)</label>
                    <textarea
                      value={content}
                      onChange={e => setContent(e.target.value)}
                      placeholder="Write your article body in Markdown format..."
                      rows={8}
                      className="w-full px-4 py-3 rounded-xl border border-white/5 bg-slate-950 text-white placeholder-slate-650 focus:outline-none focus:border-indigo-500 text-sm font-mono leading-relaxed"
                      required
                    />
                  </div>

                  {/* Image Cover */}
                  <div className="space-y-2 border-t border-white/5 pt-4">
                    <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Cover Image URL</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={coverImage}
                        onChange={e => setCoverImage(e.target.value)}
                        placeholder="Paste image address or upload file..."
                        className="flex-1 px-4 py-2.5 rounded-xl border border-white/5 bg-slate-950 text-white text-sm"
                        required
                      />
                      <label className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-750 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer flex-shrink-0 transition-colors">
                        {isUploading ? (
                          <span className="w-4 h-4 border border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <Upload size={14} />
                            <span>Upload File</span>
                          </>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          disabled={isUploading}
                        />
                      </label>
                    </div>
                  </div>

                  {/* Dynamic Tags */}
                  <div className="space-y-2 border-t border-white/5 pt-4">
                    <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Tags</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={tagInput}
                        onChange={e => setTagInput(e.target.value)}
                        placeholder="Add tag e.g. Business, Marketing"
                        className="flex-1 px-4 py-2 rounded-xl border border-white/5 bg-slate-950 text-white text-sm"
                        onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                      />
                      <button
                        type="button"
                        onClick={handleAddTag}
                        className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl"
                      >
                        Add
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {tags.map((tag, idx) => (
                        <span key={idx} className="flex items-center gap-1 px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-xs text-slate-350">
                          <span>{tag}</span>
                          <button type="button" onClick={() => handleRemoveTag(idx)} className="text-indigo-400 hover:text-white">
                            <X size={10} />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Featured checkbox */}
                  <div className="flex items-center gap-3 pt-3">
                    <input
                      type="checkbox"
                      id="featured"
                      checked={featured}
                      onChange={e => setFeatured(e.target.checked)}
                      className="w-4 h-4 rounded border-white/5 text-indigo-600 bg-slate-950 focus:ring-indigo-500"
                    />
                    <label htmlFor="featured" className="text-slate-350 text-sm font-semibold selection:bg-transparent cursor-pointer">
                      Feature this article at top of blog
                    </label>
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-6 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-3.5 bg-slate-950 border border-white/5 text-slate-400 font-semibold rounded-xl text-sm hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 bg-indigo-600 hover:bg-indigo-750 text-white font-semibold rounded-xl text-sm transition-all"
                >
                  {isSubmitting ? 'Saving...' : 'Save Article'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
