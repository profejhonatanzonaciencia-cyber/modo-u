export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #5b21b6, #7c3aed, #2563eb)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            backgroundColor: "rgba(255,255,255,0.15)",
            padding: "8px 18px",
            borderRadius: "30px",
            marginBottom: "25px",
            fontWeight: "bold",
          }}
        >
          🚀 Tu camino hacia la universidad
        </div>

        <h1
          style={{
            fontSize: "64px",
            margin: "0 0 10px",
            fontWeight: "800",
          }}
        >
          MODO U
        </h1>

        <h2
          style={{
            fontSize: "30px",
            marginBottom: "20px",
          }}
        >
          Activa tu potencial
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.6",
            maxWidth: "700px",
            margin: "0 auto 35px",
          }}
        >
          Aprende Matemática y Química paso a paso, practica con ejercicios
          y prepárate para ingresar a la universidad.
        </p>

        <button
          style={{
            backgroundColor: "white",
            color: "#5b21b6",
            border: "none",
            padding: "16px 32px",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          Empezar a estudiar →
        </button>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "60px",
          }}
        >
          <div style={cardStyle}>
            <div style={{ fontSize: "35px" }}>📐</div>
            <h3>Matemática</h3>
            <p>Álgebra, aritmética, geometría y más.</p>
          </div>

          <div style={cardStyle}>
            <div style={{ fontSize: "35px" }}>🧪</div>
            <h3>Química</h3>
            <p>Domina los conceptos y practica ejercicios.</p>
          </div>

          <div style={cardStyle}>
            <div style={{ fontSize: "35px" }}>🎯</div>
            <h3>Prepárate</h3>
            <p>Avanza a tu ritmo hacia tu meta universitaria.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

const cardStyle = {
  backgroundColor: "rgba(255,255,255,0.15)",
  border: "1px solid rgba(255,255,255,0.25)",
  borderRadius: "18px",
  padding: "25px",
  width: "220px",
  backdropFilter: "blur(10px)",
};
