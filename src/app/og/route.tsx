import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

const WIDTH = 1200;
const HEIGHT = 630;

/**
 * Branded 1200×630 share card. `?title=` and `?subtitle=` let each page get
 * its own preview (e.g. "Web Development in Delhi") from one template.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get('title') || 'Professional Web & IT Solutions').slice(0, 90);
  const subtitle = (
    searchParams.get('subtitle') ||
    'Websites · E-Commerce · SEO · Mobile Apps · WhatsApp Automation'
  ).slice(0, 110);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #0f1e3d 0%, #1a4fb2 55%, #0e7490 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: '#ffffff',
              color: '#1a4fb2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            SK
          </div>
          <div style={{ display: 'flex', fontSize: 36, fontWeight: 700, letterSpacing: -0.5 }}>
            SK WebTech
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div
            style={{
              display: 'flex',
              fontSize: title.length > 45 ? 60 : 72,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 1040,
            }}
          >
            {title}
          </div>
          <div style={{ display: 'flex', fontSize: 28, color: 'rgba(255,255,255,0.82)', maxWidth: 1040 }}>
            {subtitle}
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 26, color: 'rgba(255,255,255,0.75)' }}>
          www.skwebtech.in
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      headers: { 'Cache-Control': 'public, max-age=86400, s-maxage=604800, immutable' },
    }
  );
}
