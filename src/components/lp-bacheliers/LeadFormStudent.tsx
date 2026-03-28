import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";

interface FormData {
  firstName: string;
  email: string;
  whatsapp: string;
  interest: string;
}

export default function LeadFormStudent() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    const params = new URLSearchParams(window.location.search);
    const payload = {
      ...data,
      source: "lp-futur-etudiant",
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
    };
    console.log("Form submission:", payload);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-7 shadow-xl text-center"
      >
        <CheckCircle className="w-12 h-12 text-aui-green-light mx-auto mb-4" />
        <p className="font-display font-bold text-xl text-aui-text-dark mb-2">
          C'est envoyé !
        </p>
        <p className="text-aui-text-muted text-sm">
          Check ta boîte mail. Un conseiller te contactera sous 24h.
        </p>
      </motion.div>
    );
  }

  const inputBase =
    "w-full rounded-xl border border-aui-border bg-aui-cream/50 px-4 py-3 text-sm text-aui-text-dark placeholder:text-aui-text-muted/60 focus:outline-none focus:ring-2 focus:ring-aui-green-light/40 focus:border-aui-green-light transition-colors";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-2xl p-7 shadow-xl"
    >
      <h3 className="font-display text-xl font-bold text-aui-text-dark mb-1">
        Reçois ton guide d'admission
      </h3>
      <p className="text-sm text-aui-text-muted mb-5">
        On t'envoie tout ce qu'il faut pour postuler. Un conseiller te recontacte sous 24h.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
        <div>
          <label className="block text-[11px] font-semibold tracking-wider text-aui-text-muted mb-1.5">
            PRÉNOM
          </label>
          <input
            {...register("firstName", { required: true })}
            placeholder="Prénom"
            className={`${inputBase} ${errors.firstName ? "ring-2 ring-red-400 border-red-400" : ""}`}
          />
        </div>

        <div>
          <label className="block text-[11px] font-semibold tracking-wider text-aui-text-muted mb-1.5">
            EMAIL
          </label>
          <input
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
            type="email"
            placeholder="Email"
            className={`${inputBase} ${errors.email ? "ring-2 ring-red-400 border-red-400" : ""}`}
          />
        </div>

        <div>
          <label className="block text-[11px] font-semibold tracking-wider text-aui-text-muted mb-1.5">
            WHATSAPP
          </label>
          <input
            {...register("whatsapp", { required: true })}
            type="tel"
            placeholder="Ton numéro WhatsApp"
            className={`${inputBase} ${errors.whatsapp ? "ring-2 ring-red-400 border-red-400" : ""}`}
          />
        </div>

        <div>
          <label className="block text-[11px] font-semibold tracking-wider text-aui-text-muted mb-1.5">
            FILIÈRE QUI T'INTÉRESSE
          </label>
          <select
            {...register("interest", { required: true })}
            className={`${inputBase} ${errors.interest ? "ring-2 ring-red-400 border-red-400" : ""}`}
            defaultValue=""
          >
            <option value="" disabled>
              Choisis une filière
            </option>
            <option>Business & Management</option>
            <option>Ingénierie & Tech (CS, AI, Data, Énergie)</option>
            <option>Sciences Humaines & Communication</option>
            <option>Je ne sais pas encore</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="bg-aui-green-dark hover:bg-aui-green-mid text-white rounded-xl py-3.5 w-full font-semibold text-sm transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
        >
          {submitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            "Envoie-moi le guide →"
          )}
        </button>
      </form>

      <p className="text-[11px] text-aui-text-muted text-center mt-4">
        Réponse sous 24h · C'est gratuit · Tes données restent confidentielles
      </p>
    </motion.div>
  );
}
