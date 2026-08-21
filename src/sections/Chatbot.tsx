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
      const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:5000";

      const response = await fetch(`${API_URL}/api/chat`, {
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
      className="py-32 lg:py-36 bg-[#FAF8F1]"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* ================= HEADING ================= */}

        <div className="text-center mb-16 lg:mb-20">

          <p className="uppercase tracking-[0.3em] text-[#8C8426] font-black text-4xl sm:text-5xl lg:text-5xl">
            AI ASSISTANT
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-5 text-[#222222]">
            Chat With
            <span className="text-[#5A561F]"> Mini Me</span>
          </h2>

          <div className="w-24 h-1.5 bg-[#8C8426] rounded-full mx-auto mt-7" />

          <p className="text-[#666666] text-lg lg:text-xl mt-7 max-w-3xl mx-auto leading-8">
            Have a question about my projects, skills, certifications,
            or experience? Ask my AI assistant.
          </p>

        </div>

        {/* ================= CHAT BOX ================= */}

        <div className="bg-white rounded-3xl border border-[#DDD5B8] shadow-xl overflow-hidden">

          {/* ================= CHAT HEADER ================= */}

          <div className="bg-[#5A561F] px-7 py-6 flex items-center gap-5">

            <div className="w-14 h-14 rounded-full bg-[#C8BC55] flex items-center justify-center text-[#3F3A20]">
              <FaRobot size={25} />
            </div>

            <div>
              <h3 className="text-white text-2xl lg:text-3xl font-bold">
                Mini Me
              </h3>

              <p className="text-[#E8E4D4] text-lg lg:text-xl">
                Ask me anything about Diyanshi
              </p>
            </div>

          </div>

          {/* ================= MESSAGES ================= */}

          <div className="h-[480px] lg:h-[520px] overflow-y-auto p-8 space-y-6 bg-[#FCFBF7]">

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
                  className={`max-w-[82%] px-7 py-5 rounded-2xl text-xl lg:text-2xl leading-9 ${
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
                <div className="bg-white border border-[#E7E2D6] px-5 py-4 rounded-2xl text-lg lg:text-xl text-[#777777]">
                  Thinking...
                </div>
              </div>
            )}

          </div>

          {/* ================= SUGGESTED QUESTIONS ================= */}

          <div className="px-6 lg:px-7 pt-7 bg-white">

            <p className="text-2xl lg:text-3xl font-bold text-[#666666] mb-5">
              Try asking:
            </p>

            <div className="flex flex-wrap gap-4">

              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => sendMessage(question)}
                  disabled={loading}
                  className="px-6 py-4 rounded-full border-2 border-[#DDD5B8]
                             text-lg lg:text-xl font-semibold text-[#5A561F]
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

          <div className="p-7 lg:p-8 border-t border-[#E7E2D6] bg-white">

            <div className="flex gap-4">

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Diyanshi..."
                className="flex-1 px-7 py-6 rounded-xl border border-[#DDD5B8]
                           outline-none text-lg lg:text-xl text-[#333333]
                           focus:border-[#8C8426]
                           focus:ring-2 focus:ring-[#C8BC55]/30"
              />

              <button
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="w-16 h-16 lg:w-[72px] lg:h-[72px] rounded-xl bg-[#5A561F] text-white
                           flex items-center justify-center
                           hover:bg-[#444114] transition
                           disabled:opacity-50
                           disabled:cursor-not-allowed"
              >
                <FaPaperPlane size={23} />
              </button>

            </div>

            <p className="text-base lg:text-lg text-[#888888] mt-5 text-center">
              AI-powered portfolio assistant
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Chatbot;