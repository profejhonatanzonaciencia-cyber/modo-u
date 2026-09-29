import { supabase } from "../../lib/supabase";

export const dynamic = "force-dynamic";

export default async function PruebaSupabase() {
  const { data: cursos, error } = await supabase
    .from("cursos")
    .select("*");

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f8fc",
        fontFamily: "Arial, sans-serif",
        padding: "60px 20px",
        color: "#172033",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            marginBottom: "10px",
          }}
        >
          Prueba de Supabase
        </h1>

        <p
          style={{
            color: "#687083",
            fontSize: "18px",
            marginBottom: "35px",
          }}
        >
          Esta página comprueba si MODO U puede leer información desde
          Supabase.
        </p>

        {error ? (
          <div
            style={{
              background: "#ffe8e8",
              border: "1px solid #ffb8b8",
              borderRadius: "15px",
              padding: "25px",
              color: "#a61b1b",
            }}
          >
            <h2>Error al conectar con Supabase</h2>

            <p>{error.message}</p>
          </div>
        ) : (
          <>
            <div
              style={{
                background: "#e9f7f3",
                border: "1px solid #bce8dc",
                borderRadius: "15px",
                padding: "20px",
                marginBottom: "25px",
                color: "#13795b",
                fontWeight: "700",
              }}
            >
              ✅ Conexión con Supabase realizada correctamente.
            </div>

            <h2>Cursos encontrados: {cursos?.length || 0}</h2>

            <div
              style={{
                display: "grid",
                gap: "15px",
                marginTop: "20px",
              }}
            >
              {cursos?.map((curso) => (
                <div
                  key={curso.id}
                  style={{
                    background: "white",
                    padding: "22px",
                    borderRadius: "15px",
                    border: "1px solid #e8eaf2",
                    boxShadow: "0 5px 20px rgba(35,38,55,0.05)",
                  }}
                >
                  <strong
                    style={{
                      fontSize: "19px",
                    }}
                  >
                    {curso.nombre}
                  </strong>
                </div>
              ))}
            </div>

            {cursos?.length === 0 && (
              <div
                style={{
                  background: "white",
                  padding: "25px",
                  borderRadius: "15px",
                  border: "1px solid #e8eaf2",
                  marginTop: "20px",
                }}
              >
                La conexión funciona, pero la tabla cursos no devolvió
                registros.
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
