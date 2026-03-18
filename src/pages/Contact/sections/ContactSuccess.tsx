import { Icon } from '../../../components/Icon';

interface ContactSuccessProps {
  name: string;
}

export function ContactSuccess({ name }: ContactSuccessProps) {
  return (
    <div className="fw flex flex-col items-center justify-center text-center py-20 px-10 bg-panel border border-gold/20 rounded-2xl">
      <div className="w-14 h-14 rounded-full border-2 border-gold flex items-center justify-center mb-5 text-gold">
        <Icon n="chk" s={24} />
      </div>
      <h3 className="font-display font-bold text-2xl text-text mb-2">Message Received!</h3>
      <p className="font-body text-muted text-sm max-w-sm">
        Thanks {name.split(' ')[0] || 'there'}! I'll review your project and follow up shortly.
      </p>
    </div>
  );
}
