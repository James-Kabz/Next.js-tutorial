"use client"
export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f4'
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        border: '6px solid #ccc',
        borderTop: '6px solid #007acc',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }} />
      <h1 style={{ marginTop: '20px', color: '#333' }}>Loading...</h1>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
