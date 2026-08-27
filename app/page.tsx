export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
          <span>☁️</span>
          <span>Cloud Computing</span>
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
          Laboratorio 1
          <span className="block text-blue-400">
            Despliegue en la nube
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Aplicación desarrollada con Next.js y preparada para ser desplegada
          en Vercel mediante integración continua con GitHub.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Framework</p>
            <h2 className="mt-2 text-xl font-semibold">Next.js</h2>
            <p className="mt-2 text-sm text-slate-300">
              Aplicación web moderna basada en React.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Control de versiones</p>
            <h2 className="mt-2 text-xl font-semibold">GitHub</h2>
            <p className="mt-2 text-sm text-slate-300">
              Repositorio para almacenar y gestionar el código.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Plataforma Cloud</p>
            <h2 className="mt-2 text-xl font-semibold">Vercel</h2>
            <p className="mt-2 text-sm text-slate-300">
              Despliegue y publicación de la aplicación en Internet.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">●</span>
            <div>
              <p className="text-sm text-emerald-300">
                Estado del proyecto
              </p>
              <p className="font-semibold">
                Aplicación funcionando correctamente
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          <p>Universidad de Antioquia</p>
          <p>Cloud Computing · 2026</p>
          <p className="mt-2">
            Integrantes: Integrante 1 · Integrante 2 · Integrante 3
          </p>
        </div>

      </div>
    </main>
  );
}