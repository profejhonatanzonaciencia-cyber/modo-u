export default function Matematica() {
  const temas = [
    {
      numero: "01",
      icono: "➕",
      titulo: "Aritmética",
      descripcion:
        "Refuerza las operaciones fundamentales y aprende a trabajar con números con seguridad.",
      contenidos: [
        "Números naturales y enteros",
        "Fracciones y decimales",
        "Potencias y raíces",
        "Razones y proporciones",
      ],
    },
    {
      numero: "02",
      icono: "𝑥",
      titulo: "Álgebra",
      descripcion:
        "Aprende a utilizar expresiones, ecuaciones y variables para resolver problemas.",
      contenidos: [
        "Expresiones algebraicas",
        "Ecuaciones",
        "Productos notables",
        "Factorización",
      ],
    },
    {
      numero: "03",
      icono: "△",
      titulo: "Geometría",
      descripcion:
        "Comprende las figuras, sus propiedades y las relaciones entre medidas y espacios.",
      contenidos: [
        "Ángulos",
        "Triángulos",
        "Perímetros y áreas",
        "Teorema de Pitágoras",
      ],
    },
    {
      numero: "04",
      icono: "🧠",
      titulo: "Razonamiento matemático",
      descripcion:
        "Desarrolla estrategias para analizar información y resolver problemas paso a paso.",
      contenidos: [
        "Patrones y sucesiones",
        "Problemas de lógica",
        "Planteamiento de problemas",
        "Estrategias de resolución",
      ],
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
            fontWeight: "600",
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

          <a
            href="/materias"
            style={{
              color: "#6536e8",
              textDecoration: "none",
              fontWeight: "800",
            }}
          >
            Materias
          </a>

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

      {/* ENCABEZADO */}
      <section
        style={{
          padding: "70px 8% 60px",
          background:
            "linear-gradient(135deg, #ffffff 0%, #f4f0ff 60%, #eef3ff 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <a
            href="/materias"
            style={{
              color: "#6536e8",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "15px",
            }}
          >
            ← Volver a materias
          </a>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              marginTop: "35px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "20px",
                background: "#eee7ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "35px",
              }}
            >
              📐
            </div>

            <div>
              <div
                style={{
                  color: "#6536e8",
                  fontWeight: "800",
                  fontSize: "14px",
                  marginBottom: "7px",
                }}
              >
                MATEMÁTICA
              </div>

              <h1
                style={{
                  fontSize: "48px",
                  margin: "0",
                  fontWeight: "900",
                  letterSpacing: "-1px",
                }}
              >
                Domina los números
              </h1>
            </div>
          </div>

          <p
            style={{
              color: "#606879",
              fontSize: "18px",
              lineHeight: "1.7",
              maxWidth: "720px",
              margin: "0",
            }}
          >
            Aprende Matemática desde las bases. Avanza tema por tema con
            explicaciones claras, práctica y ejercicios pensados para
            prepararte para la universidad.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "65px 8% 100px",
        }}
      >
        <div
          style={{
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              color: "#6536e8",
              fontWeight: "800",
              fontSize: "14px",
              marginBottom: "10px",
            }}
          >
            TU RUTA DE APRENDIZAJE
          </div>

          <h2
            style={{
              fontSize: "34px",
              margin: "0 0 10px",
            }}
          >
            ¿Qué aprenderás?
          </h2>

          <p
            style={{
              color: "#6c7280",
              fontSize: "17px",
              margin: "0",
            }}
          >
            Empieza por las bases y avanza progresivamente.
          </p>
        </div>

        {/* TARJETAS DE TEMAS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
        >
          {temas.map((tema) => (
            <div
              key={tema.numero}
              style={{
                background: "white",
                border: "1px solid #e7e9f1",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 8px 30px rgba(35,38,55,0.05)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "15px",
                    background: "#f0ebff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "27px",
                    fontWeight: "800",
                    color: "#6536e8",
                  }}
                >
                  {tema.icono}
                </div>

                <div
                  style={{
                    color: "#b5adcc",
                    fontWeight: "900",
                    fontSize: "16px",
                  }}
                >
                  {tema.numero}
                </div>
              </div>

              <h3
                style={{
                  fontSize: "24px",
                  margin: "0 0 10px",
                }}
              >
                {tema.titulo}
              </h3>

              <p
                style={{
                  color: "#6c7280",
                  lineHeight: "1.6",
                  margin: "0 0 20px",
                }}
              >
                {tema.descripcion}
              </p>

              <div
                style={{
                  borderTop: "1px solid #eceef4",
                  paddingTop: "18px",
                }}
              >
                {tema.contenidos.map((contenido) => (
                  <div
                    key={contenido}
                    style={{
                      marginBottom: "10px",
                      color: "#505767",
                      fontSize: "15px",
                    }}
                  >
                    <span
                      style={{
                        color: "#6536e8",
                        fontWeight: "800",
                        marginRight: "8px",
                      }}
                    >
                      ✓
                    </span>
                    {contenido}
                  </div>
                ))}
              </div>

              <button
                style={{
                  width: "100%",
                  marginTop: "15px",
                  border: "none",
                  background: "#6536e8",
                  color: "white",
                  padding: "14px",
                  borderRadius: "11px",
                  fontWeight: "800",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              >
                Comenzar tema →
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
