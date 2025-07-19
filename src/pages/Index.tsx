export default function Index() {
  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(91deg, #3b82f6 0%, #8b5cf6 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 40px',
      fontFamily: '"Inter Tight", sans-serif'
    }}>
      {/* Hero Section */}
      <div style={{ maxWidth: '1200px', textAlign: 'center', marginBottom: '80px' }}>
        <h1 style={{
          fontSize: '64px',
          fontWeight: '800',
          color: 'white',
          letterSpacing: '-0.02em',
          lineHeight: '0.9em',
          marginBottom: '16px'
        }}>
          Transform Your Ideas Into Reality
        </h1>
        <p style={{
          fontSize: '20px',
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.5em',
          marginBottom: '32px'
        }}>
          Discover innovative solutions that elevate your business to new heights. From strategy to execution, we're here to help you succeed.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{
            background: 'white',
            color: 'black',
            padding: '16px 32px',
            borderRadius: '12px',
            border: 'none',
            fontWeight: '600',
            fontSize: '16px',
            cursor: 'pointer'
          }}>
            Get Started Today
          </button>
          <button style={{
            background: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            fontWeight: '600',
            fontSize: '16px',
            cursor: 'pointer'
          }}>
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '24px',
        padding: '80px 40px',
        maxWidth: '1000px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: '700',
          color: 'white',
          letterSpacing: '-0.02em',
          marginBottom: '16px'
        }}>
          Why Choose Us?
        </h2>
        <p style={{
          fontSize: '18px',
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.6em',
          marginBottom: '48px'
        }}>
          We provide cutting-edge solutions that help businesses thrive in today's competitive landscape.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '32px',
          marginTop: '48px'
        }}>
          <div style={{ padding: '32px', textAlign: 'center' }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              ⚡
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '8px' }}>
              Innovation
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.4em' }}>
              Cutting-edge solutions that push boundaries
            </p>
          </div>

          <div style={{ padding: '32px', textAlign: 'center' }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              🔒
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '8px' }}>
              Reliability
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.4em' }}>
              Dependable results you can count on
            </p>
          </div>

          <div style={{ padding: '32px', textAlign: 'center' }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              margin: '0 auto 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              🎯
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: 'white', marginBottom: '8px' }}>
              Support
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.4em' }}>
              24/7 dedicated customer support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}