import { Icon } from '../../../components/Icon';

interface FormData {
  name: string;
  email: string;
  type: string;
  budget: string;
  idea: string;
}

interface ContactFormProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ContactForm({ formData, onChange, onSubmit }: ContactFormProps) {
  return (
    <form onSubmit={onSubmit} className="fw space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="ff">
          <input
            name="name"
            value={formData.name}
            onChange={onChange}
            required
            placeholder="Name"
            className="fi"
          />
          <label className="fl">Your Name</label>
        </div>
        <div className="ff">
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={onChange}
            required
            placeholder="Email"
            className="fi"
          />
          <label className="fl">Email Address</label>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="ff relative">
          <select
            name="type"
            value={formData.type}
            onChange={onChange}
            required
            className="fi cursor-pointer"
            style={formData.type ? {} : { color: 'transparent' }}
          >
            <option value="" disabled>
              Type
            </option>
            <option value="webapp">Web App Dev</option>
            <option value="consulting">Consulting</option>
            <option value="uiux">UI/UX Design</option>
            <option value="ds">Design System</option>
            <option value="other">Other</option>
          </select>
          <label
            className="fl"
            style={
              formData.type
                ? {
                    top: '-10px',
                    left: '12px',
                    fontSize: '11px',
                    color: '#e8c547',
                    background: '#0a0a0b',
                    padding: '0 4px',
                    transform: 'none',
                  }
                : {}
            }
          >
            Project Type
          </label>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
            <Icon n="chev" s={13} />
          </div>
        </div>

        <div className="ff relative">
          <select
            name="budget"
            value={formData.budget}
            onChange={onChange}
            required
            className="fi cursor-pointer"
            style={formData.budget ? {} : { color: 'transparent' }}
          >
            <option value="" disabled>
              Budget
            </option>
            <option value="1k-5k">$1k – $5k</option>
            <option value="5k-15k">$5k – $15k</option>
            <option value="15k-50k">$15k – $50k</option>
            <option value="50k+">$50k+</option>
            <option value="retainer">Ongoing retainer</option>
          </select>
          <label
            className="fl"
            style={
              formData.budget
                ? {
                    top: '-10px',
                    left: '12px',
                    fontSize: '11px',
                    color: '#e8c547',
                    background: '#0a0a0b',
                    padding: '0 4px',
                    transform: 'none',
                  }
                : {}
            }
          >
            Budget Range
          </label>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
            <Icon n="chev" s={13} />
          </div>
        </div>
      </div>

      <div className="ff">
        <textarea
          name="idea"
          value={formData.idea}
          onChange={onChange}
          rows={6}
          required
          placeholder="idea"
          className="fi resize-none"
          style={{ paddingTop: '22px' }}
        />
        <label
          className="fl"
          style={{
            top: '18px',
            transform: 'none',
            ...(formData.idea
              ? {
                  top: '-10px',
                  left: '12px',
                  fontSize: '11px',
                  color: '#e8c547',
                  background: '#0a0a0b',
                  padding: '0 4px',
                }
              : {}),
          }}
        >
          Tell Me About Your Idea
        </label>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-4 bg-gold text-ink font-display font-bold text-sm rounded-md hover:bg-gold/90 transition-all active:scale-[.99]"
      >
        Send Inquiry <Icon n="arr" s={14} />
      </button>

      <p className="font-mono text-xs text-muted text-center">No spam. Just a real conversation about your project.</p>
    </form>
  );
}
