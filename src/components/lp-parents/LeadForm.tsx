"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { FORM_FIELDS } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

interface FormData {
  [key: string]: string;
}

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Capture UTM params
    const params = new URLSearchParams(window.location.search);
    const payload = {
      ...data,
      source: "lp-parents",
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
    };

    // TODO: POST to HubSpot endpoint
    console.log("Form submission:", payload);

    // Simulate submission
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  return (
    <div
      id="lead-form"
      className="bg-white rounded-2xl p-8 shadow-lg lg:sticky lg:top-24"
    >
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center py-12"
          >
            <CheckCircle className="w-14 h-14 text-aui-green-light mx-auto mb-4" />
            <p className="text-lg font-semibold text-aui-text-dark font-display">
              Merci !
            </p>
            <p className="text-sm text-aui-text-muted mt-2 font-body">
              Le guide arrive dans votre boîte mail. Un conseiller vous
              contactera sous 24h.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-aui-text-dark font-display">
                Recevez le guide d&apos;admission 2026
              </h3>
              <p className="text-sm text-aui-text-muted mt-1 font-body">
                Complétez ce formulaire pour recevoir le guide complet et être
                recontacté par un conseiller admissions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FORM_FIELDS.map((field) => {
                const isHalf = "half" in field && field.half;
                const wrapper = isHalf ? "" : "sm:col-span-2";

                return (
                  <div key={field.name} className={wrapper}>
                    <label className="block text-xs font-semibold tracking-wider text-aui-text-dark uppercase mb-1.5 font-body">
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <select
                        {...register(field.name, { required: true })}
                        className="w-full border border-aui-border rounded-xl px-4 py-3 text-base bg-white focus:border-aui-green-mid focus:ring-2 focus:ring-aui-green-mid/20 transition-all duration-200 font-body appearance-none"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Sélectionner
                        </option>
                        {field.options?.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        {...register(field.name, {
                          required: true,
                          ...(field.type === "email" && {
                            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          }),
                        })}
                        className="w-full border border-aui-border rounded-xl px-4 py-3 text-base focus:border-aui-green-mid focus:ring-2 focus:ring-aui-green-mid/20 transition-all duration-200 font-body"
                      />
                    )}
                    {errors[field.name] && (
                      <p className="text-xs text-red-500 mt-1">
                        Ce champ est requis
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-aui-green-dark hover:bg-aui-green-mid text-white rounded-xl py-4 text-base font-semibold transition-colors duration-200 disabled:opacity-60 font-body"
            >
              {isSubmitting ? "Envoi en cours..." : "Recevoir le guide →"}
            </button>

            <p className="text-xs text-aui-text-muted text-center font-body">
              Réponse sous 24h · Sans engagement · Données confidentielles
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <span className="text-xs text-aui-text-muted opacity-70">
                🏛️ Université publique
              </span>
              <span className="text-xs text-aui-text-muted opacity-70">
                📜 Diplôme d&apos;État
              </span>
              <span className="text-xs text-aui-text-muted opacity-70">
                🌍 NECHE · ABET · EPAS
              </span>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
