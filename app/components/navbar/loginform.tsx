import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import useAuth from "~/components/auth/authprovider";
import { ApiError } from "~/services/api";

function getErrorMessage(error: unknown): string {
  if (error instanceof ApiError) {
    if (typeof error.data === "object" && error.data !== null) {
      const maybeDetail = (error.data as { detail?: unknown }).detail;
      if (typeof maybeDetail === "string" && maybeDetail.length > 0) {
        return maybeDetail;
      }

      const maybeMessage = (error.data as { message?: unknown }).message;
      if (typeof maybeMessage === "string" && maybeMessage.length > 0) {
        return maybeMessage;
      }
    }

    return error.message || "Login failed";
  }

  return "Login failed";
}

export default function LoginPage() {
  const { login, user, loading } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
    setSubmitting(true);

    try {
      await login(username, password);
      navigate("/", { replace: true });
    } catch (err: unknown) {
      setError(getErrorMessage(err));
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <main className="mx-auto max-w-md px-4 py-12">
        <p>Checking session...</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-md px-4 py-12">
      <h1 className="text-2xl font-bold">Sign in</h1>
      <p className="mt-2 text-sm text-slate-600">
        Use your username and password to continue.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-4 rounded-lg border p-4"
      >
        <div className="space-y-1">
          <label htmlFor="username" className="block text-sm font-medium">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            autoComplete="username"
            required
            className="w-full rounded border px-3 py-2"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            autoComplete="current-password"
            required
            className="w-full rounded border px-3 py-2"
          />
        </div>

        {error ? (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded bg-slate-900 px-4 py-2 text-white disabled:opacity-60"
        >
          {submitting ? "Signing in..." : "Sign in"}
        </button>

        <p className="text-sm text-slate-600">
          Need an account?{" "}
          <Link to="/signup" className="underline">
            Sign up
          </Link>
        </p>
      </form>
    </main>
  );
}
