import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoveCountdownApp() {
  const targetDate = new Date('2025-11-22T00:00:00');

  const [showCountdown, setShowCountdown] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  function getTimeLeft() {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds, finished: false };
  }

  const Heart = ({ size = 28, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 21s-7.5-4.735-10-8.065C-0.443 8.91 3.2 4 7.5 6.5 9.3 7.6 11 9.4 12 11c1-1.6 2.7-3.4 4.5-4.5C20.8 4 24.443 8.91 22 12.935 19.5 16.265 12 21 12 21z" />
    </svg>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 via-purple-50 to-white p-6 relative overflow-hidden">
      {/* Música de fondo (asegúrate de reemplazar el src si tienes el archivo mp3 propio) */}
      <audio autoPlay loop>
        <source src="https://docs.google.com/uc?export=download&id=1bJvXJw7ZCVXc0Q2vmPcrAdhVKyRUn3Kg" type="audio/mpeg" />
        Tu navegador no soporta audio.
      </audio>

      <div className="max-w-3xl w-full rounded-2xl shadow-2xl p-6 md:p-12 bg-white/80 backdrop-blur-sm font-['Dancing Script',cursive]">
        {!showCountdown ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <div className="flex justify-center gap-3 mb-6">
              <Heart size={36} className="text-pink-300" />
              <Heart size={44} className="text-violet-300" />
              <Heart size={36} className="text-pink-200" />
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-3">Eres el amor de mi vida</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              y de todas mis vidas, <span className="text-purple-600">te amo</span> y <span className="text-pink-500">te amaré</span> hasta el infinito 💞
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowCountdown(true)}
              className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 text-white font-semibold shadow-lg"
            >
              Continuar
            </motion.button>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart size={34} className="text-pink-300" />
              <h2 className="text-3xl md:text-4xl font-bold text-purple-600">
                Tiempo restante para nuestro concierto juntitos de Cepeda 💖<br />
                <span className="text-pink-500">Andres Casalins & Majo Aguilar</span>
              </h2>
              <Heart size={34} className="text-violet-300" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center max-w-xl mx-auto">
              <TimeCard label="DÍAS" value={timeLeft.days} />
              <TimeCard label="HORAS" value={timeLeft.hours} />
              <TimeCard label="MIN" value={timeLeft.minutes} />
              <TimeCard label="SEG" value={timeLeft.seconds} />
            </div>

            <p className="mt-6 text-xl text-gray-700">Que todos nuestros sueños se cumplan y seamos felices, <span className="text-pink-500 font-semibold">Te amo mi niña 💕</span></p>

            <motion.button onClick={() => window.location.reload()} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="mt-6 px-6 py-2 rounded-full bg-white border-2 border-pink-200 text-pink-600 font-semibold shadow-sm">
              Volver
            </motion.button>

            {timeLeft.finished && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="mt-6 text-green-600 font-bold text-2xl">
                ¡Llegó el día! 🥳
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

function TimeCard({ label, value }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-md">
      <div className="text-4xl font-extrabold text-pink-500 tabular-nums">{String(value).padStart(2, '0')}</div>
      <div className="mt-1 text-sm font-medium text-purple-600">{label}</div>
    </div>
  );
}
