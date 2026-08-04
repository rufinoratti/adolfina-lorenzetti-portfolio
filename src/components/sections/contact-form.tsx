"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Check, PaperPlaneTilt, CircleNotch } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const initial = { name: "", email: "", project: "", message: "" };

const fieldClass =
  "w-full rounded-[2px] border border-line bg-paper px-4 text-base text-ink transition-colors placeholder:text-faint focus:border-ink/40 focus:outline-none focus:ring-1 focus:ring-accent/30";

export function ContactForm() {
  const reduce = useReducedMotion();
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  function handleChange(
    field: keyof typeof initial,
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setValues((v) => ({ ...v, [field]: event.target.value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: typeof errors = {};
    if (!values.name.trim()) nextErrors.name = "Contame cómo te llamás.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      nextErrors.email = "Necesito un email válido para responder.";
    if (values.message.trim().length < 10)
      nextErrors.message = "Contame un poco más sobre tu espacio.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 1400);
  }

  return (
    <div className="rounded-[2px] border border-line bg-surface p-6 sm:p-10">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex min-h-[26rem] flex-col items-center justify-center gap-5 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent-deep">
              <Check size={24} weight="light" />
            </span>
            <div>
              <h3 className="font-serif text-3xl font-light tracking-tight text-ink">
                Gracias, {values.name.split(" ")[0]}.
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-pretty text-sm leading-relaxed text-muted">
                Recibí tu mensaje. Te escribo a {values.email} en las próximas
                horas hábiles para seguir conversando sobre tu espacio.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setValues(initial);
                setStatus("idle");
              }}
              className="text-sm font-medium text-ink underline-offset-4 hover:text-accent-deep hover:underline"
            >
              Enviar otro mensaje
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="nombre" className="text-sm font-medium text-ink">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={(e) => handleChange("name", e)}
                  placeholder="Cómo te llamás"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "error-nombre" : undefined}
                  className={cn(fieldClass, "h-12")}
                />
                {errors.name && (
                  <p id="error-nombre" className="text-xs text-accent-deep">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) => handleChange("email", e)}
                  placeholder="tucorreo@estudio.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "error-email" : undefined}
                  className={cn(fieldClass, "h-12")}
                />
                {errors.email && (
                  <p id="error-email" className="text-xs text-accent-deep">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="proyecto" className="text-sm font-medium text-ink">
                Tipo de proyecto
              </label>
              <select
                id="proyecto"
                name="proyecto"
                value={values.project}
                onChange={(e) => handleChange("project", e)}
                className={cn(fieldClass, "h-12 appearance-none")}
              >
                <option value="">Seleccioná una opción</option>
                <option>Diseño residencial</option>
                <option>Diseño comercial</option>
                <option>Remodelación</option>
                <option>Espacio corporativo</option>
                <option>Asesoramiento decorativo</option>
                <option>Otro</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="mensaje" className="text-sm font-medium text-ink">
                Describí tu espacio
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                value={values.message}
                onChange={(e) => handleChange("message", e)}
                placeholder="Contame sobre tu proyecto: qué tipo de espacio es, qué necesitás y cómo te lo imaginás."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "error-mensaje" : undefined}
                className={cn(fieldClass, "resize-none py-3 leading-relaxed")}
              />
              {errors.message && (
                <p id="error-mensaje" className="text-xs text-accent-deep">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink text-base font-medium text-paper transition-all duration-300 hover:bg-ink-strong active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-8"
            >
              {status === "sending" ? (
                <>
                  <CircleNotch size={18} weight="light" className="animate-spin" />
                  Enviando
                </>
              ) : (
                <>
                  Enviar mensaje
                  <PaperPlaneTilt
                    size={18}
                    weight="light"
                    className="text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}