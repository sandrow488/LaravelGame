import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Iniciar Sesión" />

            <div className="mb-6 text-center">
                <h2 className="text-xl font-semibold text-gray-800">Bienvenido de nuevo</h2>
                <p className="text-sm text-gray-500 mt-1">Accede para jugar o administrar el catálogo</p>
            </div>

            {status && <div className="mb-4 text-sm font-medium text-green-600 bg-green-50 p-3 rounded-lg text-center">{status}</div>}

            <form onSubmit={submit} className="space-y-4">
                <div>
                    <InputLabel htmlFor="email" value="Correo Electrónico" className="font-semibold text-gray-700" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-gray-50 hover:bg-white"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2 text-sm" />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="Contraseña" className="font-semibold text-gray-700" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-indigo-500 focus:border-indigo-500 transition-colors bg-gray-50 hover:bg-white"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2 text-sm" />
                </div>

                <div className="flex items-center justify-between pt-2">
                    <label className="flex items-center cursor-pointer">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 w-5 h-5 cursor-pointer"
                        />
                        <span className="ms-2 text-sm font-medium text-gray-600 cursor-pointer">Mantener sesión</span>
                    </label>
                </div>

                <div className="pt-4">
                    <PrimaryButton className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform hover:-translate-y-0.5 transition-all outline-none" disabled={processing}>
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
                        Entrar a la Plataforma
                    </PrimaryButton>
                </div>
                
                {canResetPassword && (
                    <div className="text-center mt-6 pt-6 border-t border-gray-100">
                        <Link
                            href={route('password.request')}
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                        >
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                )}
            </form>
        </GuestLayout>
    );
}
