import { useState } from 'react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

export default function GovBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! I'm the Ardanis GovBot. How can I assist you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const responses: Record<string, string> = {
    'visa': 'For E-Residency visa processing, please visit our E-Residency Portal. Processing time is typically 3-5 business days.',
    'tax': 'Ardanis operates a simplified tax system. E-Residents are subject to a 0% income tax on foreign-sourced income. For detailed tax codes, please consult the Public Registry.',
    'microgrid': 'Pocket West-B operates on a 100% renewable solar microgrid with 94% solar generation efficiency. The system includes battery storage at 78% capacity.',
    'citizenship': 'To apply for citizenship, you must first hold E-Residency for at least 90 days. Visit our Citizenship Petition page to begin the process.',
    'voting': 'Ardanis uses a Liquid Proxy Voting system. You can vote directly or delegate your vote to portfolio ministers. Try our Voting Simulator to see how it works!',
    'help': 'I can help with: visa processing, tax codes, microgrid information, citizenship requirements, voting procedures, and general governance questions.',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false
    };

    setMessages([...messages, userMessage]);

    // Find matching response
    const lowercaseInput = input.toLowerCase();
    let response = "I'm not sure about that specific topic. For detailed information, please visit our Governance & Laws page or contact the appropriate council directly.";
    
    for (const [key, value] of Object.entries(responses)) {
      if (lowercaseInput.includes(key)) {
        response = value;
        break;
      }
    }

    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: response,
        isBot: true
      }]);
    }, 500);

    setInput('');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-bright to-violet shadow-lg hover:shadow-cyan-bright/50 transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Open GovBot"
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-robot'} text-white text-xl`}></i>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full animate-pulse"></span>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 glass-card rounded-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-bright/20 to-violet/20 p-4 border-b border-cyan-bright/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-bright to-violet flex items-center justify-center">
                <i className="fa-solid fa-robot text-white"></i>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Ardanis GovBot</h3>
                <p className="text-xs text-cyan-bright">Official AI Assistant</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                  msg.isBot 
                    ? 'bg-cyan-bright/10 text-white border border-cyan-bright/20' 
                    : 'bg-violet/20 text-white border border-violet/30'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-cyan-bright/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about visas, taxes, voting..."
                className="flex-1 px-3 py-2 rounded-lg input-glass text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg btn-primary text-sm"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
