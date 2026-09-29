export default function Materias() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f8fc",
        fontFamily: "Arial, sans-serif",
        color: "#172033",
      }}
    >
      {/* Barra superior */}
      <header
        style={{
          height: "72px",
          background: "white",
          borderBottom: "1px solid #e8eaf2",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 7%",
        }}
      >
        <a
          href="/"
          style={{
            fontSize: "25px",
            fontWeight: "900",
            color: "#6536e8",
            textDecoration: "none",
          }}
        >
          MODO U
        </a>

        <nav
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
            fontSize: "14px",
            fontWeight: "700",
          }}
        >
          <a
            href="/"
            style={{
              color: "#172033",
              textDecoration: "none",
            }}
          >
            Inicio
          </a>

          <span style={{ color: "#6536e8" }}>Materias</span>

          <span>Mi progreso</span>

          <button
            style={{
              border: "none",
              background: "#6536e8",
              color: "white",
              padding: "11px 20px",
              borderRadius: "10px",
              fontWeight: "700",
            }}
          >
            Ingresar
          </button>
        </nav>
      </header>

      {/* Encabezado */}
      <section
        style={{
          textAlign: "center",
          padding: "75px 20px 45px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "#eee7ff",
            color: "#6536e8",
            padding: "8px 15px",
            borderRadius: "30px",
            fontSize: "14px",
            fontWeight: "800",
            marginBottom: "20px",
          }}
        >
          📚 ELIGE QUÉ QUIERES APRENDER
        </div>

        <h1
          style={{
            fontSize: "48px",
            margin: "0 0 15px",
            fontWeight: "900",
          }}
        >
          Tus materias
        </h1>

        <p
          style={{
            color: "#687083",
            fontSize: "18px",
            maxWidth: "620px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Elige una materia y comienza a avanzar tema por tema. Cada paso te
          acerca más a tu objetivo.
        </p>
      </section>

      {/* Tarjetas */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "20px 30px 90px",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "30px",
        }}
      >
        {/* Matemática */}
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "38px",
            border: "1px solid #e8eaf2",
            boxShadow: "0 15px 45px rgba(35,38,55,0.07)",
          }}
        >
          <div
            style={{
              width: "68px",
              height: "68px",
              background: "#eee7ff",
              borderRadius: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              marginBottom: "25px",
            }}
          >
            📐
          </div>

          <div
            style={{
              color: "#6536e8",
              fontSize: "13px",
              fontWeight: "800",
              marginBottom: "8px",
            }}
          >
            MATEMÁTICA
          </div>

          <h2
            style={{
              fontSize: "30px",
              margin: "0 0 14px",
            }}
          >
            Domina los números
          </h2>

          <p
            style={{
              color: "#687083",
              lineHeight: "1.7",
              marginBottom: "28px",
            }}
          >
            Aprende aritmética, álgebra, geometría y razonamiento matemático
            desde las bases.
          </p>

          <div
            style={{
              borderTop: "1px solid #eceef3",
              paddingTop: "20px",
              marginBottom: "25px",
              color: "#4e5565",
              lineHeight: "2",
            }}
          >
            ✓ Aritmética
            <br />
            ✓ Álgebra
            <br />
            ✓ Geometría
            <br />
            ✓ Razonamiento matemático
          </div>

          <a
            href="/materias/matematica"
            style={{
              display: "block",
              width: "100%",
              boxSizing: "border-box",
              background: "#6536e8",
              color: "white",
              padding: "15px",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: "800",
              textAlign: "center",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Estudiar Matemática →
          </a>
        </div>

        {/* Química */}
        <div
          style={{
            background: "white",
            borderRadius: "24px",
            padding: "38px",
            border: "1px solid #e8eaf2",
            boxShadow: "0 15px 45px rgba(35,38,55,0.07)",
          }}
        >
          <div
            style={{
              width: "68px",
              height: "68px",
              background: "#e9f7f3",
              borderRadius: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              marginBottom: "25px",
            }}
          >
            🧪
          </div>

          <div
            style={{
              color: "#159c7d",
              fontSize: "13px",
              fontWeight: "800",
              marginBottom: "8px",
            }}
          >
            QUÍMICA
          </div>

          <h2
            style={{
              fontSize: "30px",
              margin: "0 0 14px",
            }}
          >
            Comprende la materia
          </h2>

          <p
            style={{
              color: "#687083",
              lineHeight: "1.7",
              marginBottom: "28px",
            }}
          >
            Comprende los conceptos fundamentales de química y aprende a
            resolver ejercicios paso a paso.
          </p>

          <div
            style={{
              borderTop: "1px solid #eceef3",
              paddingTop: "20px",
              marginBottom: "25px",
              color: "#4e5565",
              lineHeight: "2",
            }}
          >
            ✓ Estructura atómica
            <br />
            ✓ Tabla periódica
            <br />
            ✓ Enlaces químicos
            <br />
            ✓ Reacciones químicas
          </div>

          <button
            style={{
              width: "100%",
              border: "none",
              background: "#159c7d",
              color: "white",
              padding: "15px",
              borderRadius: "12px",
              fontSize: "15px",
              fontWeight: "800",
              cursor: "pointer",
            }}
          >
            Estudiar Química →
          </button>
        </div>
      </section>
    </main>
  );
}
