import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import useAuth from "~/components/auth/authprovider";

function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data;

    if (typeof data === "object" && data !== null) {
      const detail = (data as { detail?: unknown }).detail;
      if (typeof detail === "string" && detail.length > 0) {
        return detail;
      }

      const message = (data as { message?: unknown }).message;
      if (typeof message === "string" && message.length > 0) {
        return message;
      }
    }

    return error.message || "Sign up failed";
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return "Sign up failed";
}

export default function SignupPage() {
  const { signup, user, loading } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      navigate("/", { replace: true });
    }
  }, [loading, user, navigate]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setSubmitting(true);
    try {
      await signup(username, password);
      navigate("/", { replace: true });
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12">
        <p>Checking session...</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <div className="overflow-hidden rounded-2xl border-2 border-slate-900 bg-gradient-to-br from-amber-100 via-emerald-50 to-sky-100 shadow-[10px_10px_0px_0px_rgba(15,23,42,1)]">
        <div className="grid gap-0 md:grid-cols-2">
          <section className="border-b-2 border-slate-900 p-6 md:border-b-0 md:border-r-2">
            <p className="inline-block rounded-full border-2 border-slate-900 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide">
              Trainer Onboarding
            </p>
            <h1 className="mt-4 text-3xl font-black leading-tight text-slate-900">
              Create your
              <br />
              battle profile
            </h1>
            <p className="mt-3 text-sm text-slate-700">
              Save teams, track formats, and jump into practice tools.
            </p>

            <div className="mt-6 rounded-xl border-2 border-dashed border-slate-900 bg-white/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                Starter tips
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-800">
                <li>Pick a username you can keep long-term</li>
                <li>Use a strong password</li>
                <li>You can edit your profile later</li>
              </ul>
            </div>
          </section>

          <section className="bg-white p-6">
            <h2 className="text-xl font-extrabold text-slate-900">Sign up</h2>
            <p className="mt-1 text-sm text-slate-600">
              New here? Make your account in under a minute.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold text-slate-800"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.currentTarget.value)}
                  autoComplete="username"
                  required
                  className="mt-1 w-full text-blue-500 rounded-lg border-2 border-slate-300 px-3 py-2 outline-none transition focus:border-slate-900"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-slate-800"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  autoComplete="new-password"
                  required
                  className="mt-1 text-blue-500 w-full rounded-lg border-2 border-slate-300 px-3 py-2 outline-none transition focus:border-slate-900"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-semibold text-slate-800"
                >
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                  autoComplete="new-password"
                  required
                  className="mt-1 w-full text-blue-500  rounded-lg border-2 border-slate-300 px-3 py-2 outline-none transition focus:border-slate-900"
                />
              </div>

              {error ? (
                <p
                  className="rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700"
                  role="alert"
                >
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg border-2 border-slate-900 bg-slate-900 px-4 py-2 font-semibold text-white transition hover:translate-y-[1px] hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Creating account..." : "Create account"}
              </button>

              <p className="text-sm text-slate-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-slate-900 underline underline-offset-2"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
