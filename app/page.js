export default function Home() {
  const materias = [
    {
      icono: "📐",
      titulo: "Matemática",
      texto: "Álgebra, aritmética, geometría y razonamiento matemático.",
    },
    {
      icono: "🧪",
      titulo: "Química",
      texto: "Comprende conceptos, fórmulas y practica con ejercicios.",
    },
    {
      icono: "🎯",
      titulo: "Prepárate",
      texto: "Avanza paso a paso hacia tu ingreso a la universidad.",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f8fc",
        color: "#172033",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* BARRA SUPERIOR */}
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
        <div
          style={{
            fontSize: "25px",
            fontWeight: "900",
            color: "#6536e8",
          }}
        >
          MODO U
        </div>

        <nav
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          <span>Inicio</span>
          <span>Materias</span>
          <span>Mi progreso</span>

          <button
            style={{
              border: "none",
              background: "#6536e8",
              color: "white",
              padding: "11px 20px",
              borderRadius: "10px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Ingresar
          </button>
        </nav>
      </header>

      {/* PORTADA */}
      <section
        style={{
          minHeight: "570px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "60px 8%",
          background:
            "linear-gradient(135deg, #ffffff 0%, #f5f1ff 55%, #eef3ff 100%)",
        }}
      >
        <div style={{ maxWidth: "590px" }}>
          <div
            style={{
              display: "inline-block",
              background: "#eee7ff",
              color: "#6536e8",
              padding: "8px 14px",
              borderRadius: "30px",
              fontWeight: "700",
              fontSize: "14px",
              marginBottom: "22px",
            }}
          >
            🚀 Tu camino hacia la universidad
          </div>

          <h1
            style={{
              fontSize: "64px",
              lineHeight: "1.05",
              margin: "0 0 18px",
              fontWeight: "900",
              letterSpacing: "-2px",
            }}
          >
            Aprende.
            <br />
            Practica.
            <br />
            <span style={{ color: "#6536e8" }}>Supera tus metas.</span>
          </h1>

          <p
            style={{
              fontSize: "19px",
              lineHeight: "1.7",
              color: "#5f6677",
              maxWidth: "540px",
              marginBottom: "30px",
            }}
          >
            Prepárate en Matemática y Química con explicaciones claras,
            ejercicios y práctica pensada para estudiantes que quieren
            llegar preparados a la universidad.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              alignItems: "center",
            }}
          >
            <button
              style={{
                border: "none",
                background: "#6536e8",
                color: "white",
                padding: "15px 25px",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: "800",
                cursor: "pointer",
                boxShadow: "0 10px 25px rgba(101,54,232,0.25)",
              }}
            >
              Empezar a estudiar →
            </button>

            <button
              style={{
                border: "1px solid #d9dce7",
                background: "white",
                color: "#34394a",
                padding: "14px 23px",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Ver materias
            </button>
          </div>
        </div>

        {/* TARJETA DERECHA */}
        <div
          style={{
            width: "390px",
            background: "white",
            borderRadius: "24px",
            padding: "30px",
            boxShadow: "0 25px 70px rgba(54,42,100,0.14)",
            border: "1px solid #eeeaf8",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg,#6536e8,#7d5df4)",
              borderRadius: "18px",
              padding: "28px",
              color: "white",
              marginBottom: "18px",
            }}
          >
            <div style={{ fontSize: "13px", opacity: 0.8 }}>
              TU OBJETIVO
            </div>

            <div
              style={{
                fontSize: "25px",
                fontWeight: "800",
                marginTop: "8px",
              }}
            >
              Domina cada tema
            </div>

            <p
              style={{
                lineHeight: "1.5",
                opacity: 0.9,
                marginBottom: "0",
              }}
            >
              Aprende a tu ritmo y fortalece tus conocimientos paso a paso.
            </p>
          </div>

          <div
            style={{
              padding: "18px",
              border: "1px solid #eceef4",
              borderRadius: "15px",
              marginBottom: "12px",
            }}
          >
            <strong>📐 Matemática</strong>
            <div
              style={{
                height: "8px",
                background: "#eeeef4",
                borderRadius: "10px",
                marginTop: "13px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "70%",
                  height: "100%",
                  background: "#6536e8",
                }}
              />
            </div>
          </div>

          <div
            style={{
              padding: "18px",
              border: "1px solid #eceef4",
              borderRadius: "15px",
            }}
          >
            <strong>🧪 Química</strong>
            <div
              style={{
                height: "8px",
                background: "#eeeef4",
                borderRadius: "10px",
                marginTop: "13px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "45%",
                  height: "100%",
                  background: "#7d5df4",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MATERIAS */}
      <section
        style={{
          padding: "75px 8% 90px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "45px" }}>
          <div
            style={{
              color: "#6536e8",
              fontWeight: "800",
              marginBottom: "10px",
            }}
          >
            APRENDE A TU RITMO
          </div>

          <h2
            style={{
              fontSize: "38px",
              margin: "0 0 12px",
            }}
          >
            Todo lo que necesitas para avanzar
          </h2>

          <p style={{ color: "#6d7280", fontSize: "17px" }}>
            Empieza desde las bases y progresa paso a paso.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "22px",
          }}
        >
          {materias.map((materia) => (
            <div
              key={materia.titulo}
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "18px",
                border: "1px solid #e8eaf1",
                boxShadow: "0 8px 30px rgba(35,38,55,0.05)",
              }}
            >
              <div
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "14px",
                  background: "#f0ebff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "27px",
                  marginBottom: "20px",
                }}
              >
                {materia.icono}
              </div>

              <h3
                style={{
                  fontSize: "21px",
                  margin: "0 0 10px",
                }}
              >
                {materia.titulo}
              </h3>

              <p
                style={{
                  color: "#6c7280",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              >
                {materia.texto}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
