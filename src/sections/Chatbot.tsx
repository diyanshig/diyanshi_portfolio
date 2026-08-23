import { useState } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi, I'm Diyanshi's Mini Me. Ask me about her skills, projects, certifications, or experience.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const suggestedQuestions = [
    "Tell me about her.",
    "What projects has she built?",
    "What is her tech stack?",
    "What is her educational background?",
  ];

  const sendMessage = async (question?: string) => {
    const messageToSend = question || input;

    if (!messageToSend.trim() || loading) return;

    const userMessage = messageToSend.trim();

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      // KEEP THIS EXACTLY AS IT IS FOR VERCEL
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            data.reply ||
            "Sorry, I couldn't generate a response right now.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I'm having trouble connecting to the server. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <section
      id="chatbot"
      className="py-20 lg:py-24 bg-[#FAF8F1]"
    >
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-12 lg:mb-16">

          <p className="uppercase tracking-[0.25em] text-[#8C8426] font-bold text-base lg:text-lg">
            AI ASSISTANT
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4 text-[#222222]">
            Chat With
            <span className="text-[#5A561F]"> Mini Me</span>
          </h2>

          <div className="w-20 h-1 bg-[#8C8426] rounded-full mx-auto mt-5" />

          <p className="text-[#666666] text-base lg:text-lg mt-6 max-w-3xl mx-auto leading-8">
            Have a question about my projects, skills, certifications,
            or experience? Ask my AI assistant.
          </p>

        </div>

        {/* ================= CHAT BOX ================= */}

        <div className="bg-white rounded-2xl border border-[#DDD5B8] shadow-xl overflow-hidden">

          {/* ================= CHAT HEADER ================= */}

          <div className="bg-[#5A561F] px-6 py-5 flex items-center gap-4">

            <div className="w-12 h-12 rounded-full bg-[#C8BC55] flex items-center justify-center text-[#3F3A20]">
              <FaRobot size={21} />
            </div>

            <div>
              <h3 className="text-white text-xl lg:text-2xl font-bold">
                Mini Me
              </h3>

              <p className="text-[#E8E4D4] text-sm lg:text-base">
                Ask me anything about Diyanshi
              </p>
            </div>

          </div>

          {/* ================= MESSAGES ================= */}

          <div className="h-[400px] lg:h-[440px] overflow-y-auto p-6 space-y-4 bg-[#FCFBF7]">

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-[82%] px-5 py-3.5 rounded-2xl text-base lg:text-lg leading-7 ${
                    message.sender === "user"
                      ? "bg-[#5A561F] text-white rounded-br-md"
                      : "bg-white text-[#444444] border border-[#E7E2D6] rounded-bl-md"
                  }`}
                >
                  {message.text}
                </div>

              </div>
            ))}

            {/* ================= LOADING ================= */}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#E7E2D6] px-4 py-3 rounded-2xl text-sm lg:text-base text-[#777777]">
                  Thinking...
                </div>
              </div>
            )}

          </div>

          {/* ================= SUGGESTED QUESTIONS ================= */}

          <div className="px-6 lg:px-7 pt-6 bg-white">

            <p className="text-lg lg:text-xl font-bold text-[#666666] mb-4">
              Try asking:
            </p>

            <div className="flex flex-wrap gap-3">

              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => sendMessage(question)}
                  disabled={loading}
                  className="px-4 py-2.5 rounded-full border border-[#DDD5B8]
                             text-sm lg:text-base font-semibold text-[#5A561F]
                             bg-[#FCFBF7]
                             hover:bg-[#F3EFD8]
                             hover:border-[#C8BC55]
                             transition
                             disabled:opacity-50
                             disabled:cursor-not-allowed"
                >
                  {question}
                </button>
              ))}

            </div>

          </div>

          {/* ================= INPUT ================= */}

          <div className="p-6 lg:p-7 border-t border-[#E7E2D6] bg-white">

            <div className="flex gap-3">

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Diyanshi..."
                className="flex-1 px-5 py-4 rounded-xl border border-[#DDD5B8]
                           outline-none text-base lg:text-lg text-[#333333]
                           focus:border-[#8C8426]
                           focus:ring-2 focus:ring-[#C8BC55]/30"
              />

              <button
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-[#5A561F] text-white
                           flex items-center justify-center
                           hover:bg-[#444114] transition
                           disabled:opacity-50
                           disabled:cursor-not-allowed"
              >
                <FaPaperPlane size={18} />
              </button>

            </div>

            <p className="text-sm lg:text-base text-[#888888] mt-4 text-center">
              AI-powered portfolio assistant
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Chatbot;