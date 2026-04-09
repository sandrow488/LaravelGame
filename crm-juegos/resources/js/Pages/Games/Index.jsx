import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Index({ auth, games }) {
    const { delete: destroy, put } = useForm();

    const handlePublishToggle = (gameId) => {
        put(route('games.toggle', gameId));
    };

    const handleDelete = (gameId) => {
        if (confirm('¿Seguro que quieres borrar este juego de forma permanente?')) {
            destroy(route('games.destroy', gameId));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 pt-2 pb-2">Gestión de Juegos (CRM)</h2>}
        >
            <Head title="CRM de Juegos" />

            <div className="py-12 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Administración del Catálogo</h3>
                            <p className="text-sm text-gray-500 mt-1">Gesti&oacute;n integral de los juegos habilitados en la plataforma.</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <Link 
                                href={route('games.create')} 
                                className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <svg className="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                                Crear Nuevo Juego
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50/50">
                                    <tr>
                                        <th scope="col" className="px-8 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Detalles del Juego</th>
                                        <th scope="col" className="px-8 py-5 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Autor</th>
                                        <th scope="col" className="px-8 py-5 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Estado de Publicación</th>
                                        <th scope="col" className="px-8 py-5 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-100">
                                    {games.map((game) => (
                                        <tr key={game.id} className="hover:bg-gray-50/50 transition-colors duration-150 group">
                                            <td className="px-8 py-6 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-500">
                                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-bold text-gray-900">{game.title}</div>
                                                        <div className="text-xs text-gray-500 mt-1 max-w-[200px] truncate" title={game.description}>{game.description}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 uppercase">
                                                        {game.user ? game.user.name.charAt(0) : '?'}
                                                    </div>
                                                    <div className="ml-3 text-sm font-medium text-gray-700">
                                                        {game.user ? game.user.name : 'Desconocido'}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 whitespace-nowrap text-center">
                                                <button 
                                                    onClick={() => handlePublishToggle(game.id)}
                                                    className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 hover:shadow-md ${
                                                        game.is_published 
                                                        ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                                                        : 'bg-red-50 text-red-600 hover:bg-red-100'
                                                    }`}
                                                >
                                                    <span className={`w-2 h-2 rounded-full mr-2 ${game.is_published ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                                    {game.is_published ? 'Público' : 'Oculto'}
                                                </button>
                                            </td>
                                            <td className="px-8 py-6 whitespace-nowrap text-right text-sm font-medium space-x-3">
                                                <div className="flex justify-end items-center space-x-3 opacity-70 group-hover:opacity-100 transition-opacity">
                                                    <Link 
                                                        href={route('games.edit', game.id)} 
                                                        className="p-2 text-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 rounded-lg transition-colors"
                                                        title="Editar"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                                    </Link>
                                                    <button 
                                                        onClick={() => handleDelete(game.id)} 
                                                        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                                                        title="Eliminar permanentemente"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    
                                    {games.length === 0 && (
                                        <tr>
                                            <td colSpan="4" className="px-8 py-12 text-center">
                                                <div className="flex flex-col items-center justify-center text-gray-400">
                                                    <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                                                    <p className="text-base font-medium text-gray-500">El catálogo está vacío.</p>
                                                    <p className="text-sm mt-1">Crea tu primer juego introduciendo sus detalles.</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
