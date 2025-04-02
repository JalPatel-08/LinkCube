import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{type: 'user' | 'bot', content: string}[]>([
    {type: 'bot', content: 'Hi there! 👋 I\'m your LinkCube assistant. How can I help you today?'}
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    setMessages([...messages, {type: 'user', content: message}]);
    
    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "Thanks for your message! Our team will get back to you soon.",
        "That's a great question about LinkCube. We connect students and alumni through events and networking.",
        "You can find more resources in our Resources section.",
        "The best way to connect with alumni is through our Connect page.",
        "Thanks for your interest in LinkCube!"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, {type: 'bot', content: randomResponse}]);
    }, 1000);
    
    setMessage('');
  };

  return (
    <>
      {!isOpen && (
        <Button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-5 md:bottom-5 rounded-full h-12 w-12 p-0 shadow-lg z-50"
        >
          <MessageSquare size={20} />
        </Button>
      )}
      
      {isOpen && (
        <Card className="fixed bottom-20 md:bottom-5 right-5 w-[350px] shadow-lg z-50 animate-in fade-in slide-in-from-bottom-5">
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
            <CardTitle className="text-sm font-medium">LinkCube Assistant</CardTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <X size={16} />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[300px] overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.type === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
            <form 
              onSubmit={handleSendMessage} 
              className="border-t p-4 flex gap-2"
            >
              <Input 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit">Send</Button>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );
}; 