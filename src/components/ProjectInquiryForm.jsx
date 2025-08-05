import { useForm, ValidationError } from '@formspree/react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function ProjectInquiryForm() {
  const [state, handleSubmit] = useForm("xeozrzjv");

  if (state.succeeded) {
    return (
      <p className="text-green-500 text-center text-lg mt-6">
        ✅ Project inquiry sent! I’ll get back to you shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
          Project Type
        </label>
        <Input
          id="projectType"
          name="projectType"
          placeholder="Web2 Landing Page, Web3 DeFi, NFT Project, etc."
          required
          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500"
        />
        <ValidationError prefix="Project Type" field="projectType" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="details" className="block text-sm font-medium text-gray-300 mb-2">
          Project Details
        </label>
        <Textarea
          id="details"
          name="details"
          rows={5}
          required
          placeholder="Tell me about your project, goals, and timeline..."
          className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500"
        />
        <ValidationError prefix="Details" field="details" errors={state.errors} />
      </div>

      <Button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white py-3 text-lg font-semibold"
      >
        {state.submitting ? 'Sending...' : 'Send Project Inquiry'}
        <Mail className="ml-2 h-5 w-5" />
      </Button>
    </form>
  );
}
