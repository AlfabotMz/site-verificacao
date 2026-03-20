import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Site Verificacao',
    description: 'Site Verification Platform',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt" suppressHydrationWarning>
            <head>
                {/* Adicione quaisquer meta tags globais aqui se necessário */}
            </head>
            <body suppressHydrationWarning>
                <div className="App">
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
