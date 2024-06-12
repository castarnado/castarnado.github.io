const translations = {
    es: {
        step1_title: "Paso 1: Instale su Certificado CA.",
        step1_ca: `<strong>¿Que es un certificado CA?.</strong>`,
        step1_info: `<u>AQUÍ</u>`,
        step1_info_text: 
        `
            <p>
                Un certificado autofirmado CA (Certificado de Autoridad de Certificación) es un certificado digital emitido y firmado por la misma entidad 
                que certifica la autenticidad de otros certificados. A diferencia de los certificados firmados por autoridades de certificación de 
                confianza pública, como Let's Encrypt, un certificado autofirmado CA no está respaldado por una tercera parte confiable. 
                En lugar de eso, la entidad que emite el certificado es también la que lo firma.
            </p>
            <p>
                Los certificados autofirmados CA pueden ser útiles en redes locales o en redes privadas virtuales (VPN) donde la seguridad es fundamental,
                pero donde no se requiere un certificado de una autoridad de certificación pública. Algunos casos de uso comunes incluyen:
            </p>
            <ul>
                <li>
                    <strong>Desarrollo y pruebas:</strong> Los certificados autofirmados CA pueden ser útiles durante el desarrollo 
                    y las pruebas de aplicaciones web o servicios, cuando no es necesario un certificado público válido.
                </li>
                <li>
                    <strong>Comunicaciones internas seguras:</strong> En entornos de red local o en redes privadas 
                    virtuales, los certificados autofirmados CA pueden proporcionar un nivel adicional de seguridad al cifrar las comunicaciones entre los servidores y los clientes dentro de la red.
                </li>
                <li>
                    <strong>Autenticación interna:</strong> Los certificados autofirmados CA pueden utilizarse para autenticar servidores,
                    dispositivos y usuarios dentro de una red privada, proporcionando una capa de seguridad adicional contra ataques de intermediarios y suplantación de identidad.
                </li>
            </ul>
            <p>
                Aunque los certificados autofirmados CA pueden ser una opción conveniente en ciertos escenarios, 
                es importante tener en cuenta que no están respaldados por una entidad de certificación de confianza pública, 
                lo que significa que los clientes y usuarios pueden recibir advertencias de seguridad al intentar acceder a recursos protegidos por estos certificados. 
                Además, la gestión adecuada de los certificados autofirmados CA es crucial para garantizar la seguridad y evitar vulnerabilidades potenciales en la red.
            </p>
        `,
        step1_desc: "Haga clic en el botón de descarga para obtener el certificado.",
        download_cert: "Descargar Certificado",
        scan_qr: "También Puede escanear el siguiente QR.",
        step2_title: "Paso 2: Instale el cliente WireGuard en sus dispositivos.",
        select_platform: "Seleccione su plataforma:",
        download_from_playstore: "Descargar WireGuard desde Play Store",
        download_for_other: "Descargar WireGuard para otras plataformas",
        step3_title: "Paso 3: Conéctese a su VPN.",
        // Traducción ayuda Windows
        step3w_installar: "Paso 1: Instale el programa",
        step3w_importar: "Paso 2: Seleccione su fichero.",
        step3w_fichero: "Paso 3: Instale el programa",
        step3w_activar: "Paso 4: Seleccione su fichero.",
        // Traducción ayuda Android
        step3a_importar: "Paso 1: Presione el botón + en la aplicación",
        step3a_qr: "Paso 2: Escanee el QR creado con su servidor.",
        step3a_nombre: "Paso 3: Guarde la configuración con un nombre",
        step3a_activar: "Paso 4: Active la conexión con su VPN."
    },
    en: {
        step1_title: "Step 1: Install your CA Certificate.",
        step1_ca: `<strong>What is a CA certificate?.</strong>`,
        step1_info: `<u>HERE.</u>`,
        step1_info_text: 
        `
            <p>
                A self-signed CA certificate (Certificate Authority) is a digital certificate issued and signed by the same entity 
                that certifies the authenticity of other certificates. Unlike certificates signed by publicly trusted certification authorities, 
                such as Let's Encrypt, a self-signed CA certificate is not backed by a trusted third party. Instead, the entity that issues the certificate 
                is also the one that signs it.
            </p>
            <p>
                Self-signed CA certificates can be useful in local networks or virtual private networks (VPNs) where security is paramount, 
                but a public certification authority certificate is not required. Common use cases include:
            </p>
            <ul>
                <li>
                    <strong>Development and testing:</strong> Self-signed CA certificates can be useful during the development 
                    and testing of web applications or services, when a valid public certificate is not necessary.
                </li>
                <li>
                    <strong>Secure internal communications:</strong> In local network environments or virtual private networks, 
                    self-signed CA certificates can provide an additional level of security by encrypting communications between servers and clients within the network.
                </li>
                <li>
                    <strong>Internal authentication:</strong> Self-signed CA certificates can be used to authenticate servers, 
                    devices, and users within a private network, providing an additional layer of security against man-in-the-middle attacks and identity spoofing.
                </li>
            </ul>
            <p>
                While self-signed CA certificates can be a convenient option in certain scenarios, 
                it is important to note that they are not backed by a publicly trusted certification authority, 
                which means that clients and users may receive security warnings when trying to access resources protected by these certificates. 
                Additionally, proper management of self-signed CA certificates is crucial to ensure security and avoid potential vulnerabilities in the network.
            </p>
        `,
        step1_desc: "Click the download button to get the certificate.",
        download_cert: "Download Certificate",
        scan_qr: "You can also scan the following QR code.",
        step2_title: "Step 2: Install the WireGuard client on your devices.",
        select_platform: "Select your platform:",
        download_from_playstore: "Download WireGuard from Play Store",
        download_for_other: "Download WireGuard for other platforms",
        step3_title: "Step 3: Connect to your VPN.",
        // Windows help translation
        step3w_installar: "Step 1: Install the program",
        step3w_importar: "Step 2: Select your file.",
        step3w_fichero: "Step 3: Install the program",
        step3w_activar: "Step 4: Select your file.",
        // Android help translation
        step3a_importar: "Step 1: Press the + button in the app",
        step3a_qr: "Step 2: Scan the QR code created with your server.",
        step3a_nombre: "Step 3: Save the configuration with a name",
        step3a_activar: "Step 4: Activate the connection with your VPN."
    },
    ca: {
        step1_title: "Pas 1: Instal·leu el vostre Certificat CA.",
        step1_ca: `<strong>Què és un certificat CA?.</strong>`,
        step1_info: `<u>AQUÍ.</u>`,
        step1_info_text: 
        `
        <p>
            Un certificat CA autofirmat (Autoritat de Certificació) és un certificat digital emès i signat per la mateixa entitat 
            que certifica l'autenticitat d'altres certificats. A diferència dels certificats signats per autoritats de certificació de 
            confiança pública, com Let's Encrypt, un certificat CA autofirmat no està avalat per una tercera part de confiança. 
            En lloc d'això, l'entitat que emet el certificat també és la que el signa.
        </p>
        <p>
            Els certificats CA autofirmats poden ser útils en xarxes locals o en xarxes privades virtuals (VPN) on la seguretat és fonamental, 
            però on no es requereix un certificat d'una autoritat de certificació pública. Alguns casos d'ús comuns inclouen:
        </p>
        <ul>
            <li>
                <strong>Desenvolupament i proves:</strong> Els certificats CA autofirmats poden ser útils durant el desenvolupament 
                i les proves d'aplicacions web o serveis, quan no és necessari un certificat públic vàlid.
            </li>
            <li>
                <strong>Comunicacions internes segures:</strong> En entorns de xarxa local o en xarxes privades 
                virtuals, els certificats CA autofirmats poden proporcionar un nivell addicional de seguretat en xifrar les comunicacions entre els servidors i els clients dins de la xarxa.
            </li>
            <li>
                <strong>Autenticació interna:</strong> Els certificats CA autofirmats poden utilitzar-se per autenticar servidors, 
                dispositius i usuaris dins d'una xarxa privada, proporcionant una capa de seguretat addicional contra atacs de intermediari i suplantació d'identitat.
            </li>
        </ul>
        <p>
            Tot i que els certificats CA autofirmats poden ser una opció convenient en determinats escenaris, 
            és important tenir en compte que no estan avalats per una entitat de certificació de confiança pública, 
            el que significa que els clients i usuaris poden rebre advertències de seguretat en intentar accedir a recursos protegits per aquests certificats. 
            A més, la gestió adequada dels certificats CA autofirmats és crucial per garantir la seguretat i evitar vulnerabilitats potencials a la xarxa.
        </p>
        `,
        step1_desc: "Feu clic al botó de descàrrega per obtenir el certificat.",
        download_cert: "Descarregar Certificat",
        scan_qr: "També pot escanejar el següent codi QR.",
        step2_title: "Pas 2: Instal·li el client WireGuard en els seus dispositius.",
        select_platform: "Seleccioneu la vostra plataforma:",
        download_from_playstore: "Descarregar WireGuard des de Play Store",
        download_for_other: "Descarregar WireGuard per a altres plataformes",
        step3_title: "Pas 3: Connecta a la vostra VPN.",
        // Traducció de l'ajuda de Windows
        step3w_installar: "Pas 1: Instal·li el programa",
        step3w_importar: "Pas 2: Seleccioneu el vostre fitxer.",
        step3w_fichero: "Pas 3: Instal·li el programa",
        step3w_activar: "Pas 4: Seleccioneu el vostre fitxer.",
        // Traducció de l'ajuda d'Android
        step3a_importar: "Pas 1: Premi el botó + a l'aplicació",
        step3a_qr: "Pas 2: Escaneja el codi QR creat amb el vostre servidor.",
        step3a_nombre: "Pas 3: Desa la configuració amb un nom",
        step3a_activar: "Pas 4: Active la connexió amb la seva VPN."
    }

};