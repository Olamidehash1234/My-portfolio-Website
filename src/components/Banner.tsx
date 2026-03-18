export default function Banner() {
  return (
    <div className="bg-gold/5 border-b border-gold/10 px-6 py-2.5 text-center">
      <p className="font-mono text-xs text-gold/80 flex items-center justify-center gap-2 flex-wrap">
        <span className="avpulse" />
        Currently available for new client work —{' '}
        <a
          href="https://cal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-gold transition-colors"
        >
          book a free 30-min intro call
        </a>
      </p>
    </div>
  );
}
