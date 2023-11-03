import Vivo from "./vivo.jpeg";
import './Navbar.scss';

function  Navbar ()  {
   

    return (
        
        <nav>
            {/* Menu superior */}
            <ul>
                <li id="textOne">Baixe o App Vivo</li>
                <li id="textDue">Produtos e serviçõs</li>
                <li id="textThree">Auda</li>
                <li id="textFour">Melhores Ofertas</li>
            </ul>
            
            <img src={Vivo} alt="imagemvivo"/><p>
                <h1>Deixe sua duvida e entraremos em contado!</h1>
            </p>
            {/* formulario de duvidas */}
            <div className="form">
            <form action="https://formspree.io/f/mnqkrvqw"method="POST">
            <label>Nome:</label> 
            <input type="text" required="required" placeholder="completo"/><br/><p/>
            <label>Email:</label> 
            <input type="email" required="required" placeholder="email"/><br/><p/>
            <label>Contato:</label> 
            <input type="text"required="required" placeholder="celular"/><br/><p/>
            <label>Deixe aqui sua duvida!</label><br/><p/> 
            <textarea placeholder="Digite o texto aqui!" required="required"/><br/><p/>
            <button type="submit">Enviar</button><p/>
            </form>
            </div>
            
        </nav>
        
    )
};




export default Navbar;

