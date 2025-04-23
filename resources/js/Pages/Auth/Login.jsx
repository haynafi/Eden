import { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    return () => {
      setData("password", "");
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-primary-pink">
      {/* Left Side - Form */}
      <div className="flex-1 bg-white flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-sm space-y-6">
          <h1 className="text-2xl font-bold uppercase text-black text-center">Login</h1>
          {status && <div className="text-sm text-green-600 text-center">{status}</div>}
          <form onSubmit={submit} className="space-y-4">
            <div>
              <Input
                id="email"
                type="email"
                placeholder="Username"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                autoComplete="username"
                autoFocus
                className={`w-full border-gray-300 rounded-md ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            <div>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                autoComplete="current-password"
                className={`w-full border-gray-300 rounded-md ${errors.password ? "border-red-500" : ""}`}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                checked={data.remember}
                onChange={(e) => setData("remember", e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="remember" className="text-sm text-gray-700">Remember me</label>
            </div>
            <Button
              type="submit"
              disabled={processing}
              className="w-full bg-primary-beige text-black hover:bg-primary-mustard py-2 rounded-md"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>

      {/* Right Side - Beige Background */}
      <div className="flex-1 bg-primary-beige hidden md:block"></div>
    </div>
  );
}