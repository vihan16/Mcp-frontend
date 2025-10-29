import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";

const PromptPage = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const stages = ["Analyzing prompt", "Generating design", "Finalizing output"];

  const handleCreate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResult(null);
    setError(null);
    setStage(stages[0]);

    try {
      for (let i = 0; i < stages.length; i++) {
        setStage(stages[i]);
        await new Promise((res) => setTimeout(res, 4000));
      }

      // Yaha MCP ka API call aayega
      await new Promise((res) => setTimeout(res, 1000));

      setResult("Successfully generated Check your Figma !!");
    } catch (err) {
      setError("Something went wrong while generating content.");
    } finally {
      setLoading(false);
      setStage("");
      // setPrompt("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-950 text-white px-4">
      <motion.h1
        className="text-4xl font-bold mb-6 flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Sparkles className="text-yellow-400" /> Figma MCP Generator
      </motion.h1>

      <motion.div
        className="bg-slate-800/50 p-6 rounded-2xl shadow-lg w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <textarea
          className="w-full h-32 p-3 rounded-lg bg-slate-900/80 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          placeholder="Enter your creative prompt here..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          onClick={handleCreate}
          disabled={loading}
          className="mt-4 w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold text-lg transition-all disabled:opacity-50"
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="animate-spin" /> Working...
            </div>
          ) : (
            "Create"
          )}
        </button>

        {/*Loading animations for stages */}
        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              key={stage}
              className="mt-6 text-center text-slate-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-lg font-medium">{stage}...</div>
              <motion.div
                className="mt-4 flex justify-center"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              >
                <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full"></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/*result */}
        {result && (
          <motion.div
            className="mt-6 bg-slate-700/50 p-4 rounded-lg text-center flex items-center justify-center gap-2 text-green-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CheckCircle2 /> {result}
          </motion.div>
        )}

        {error && (
          <motion.div
            className="mt-6 bg-red-500/20 p-4 rounded-lg text-center flex items-center justify-center gap-2 text-red-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertCircle /> {error}
          </motion.div>
        )}
      </motion.div>

    </div>
  );
};

export default PromptPage;
