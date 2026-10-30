import { getImageUrl } from './utils';

export default function Profile({idImagen,nombre, profesion, premios, descubrimientos}) {
    return (
        <section className="profile">
        <h2>{nombre}</h2>
        <img
          className="avatar"
          src={getImageUrl(idImagen)}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profesión: </b>
            {profesion}
          </li>
          <li>
            <b>Premios: </b> 
            {premios}
          </li>
          <li>
            <b>Descubrió: </b>
            {descubrimientos}
          </li>
        </ul>
      </section>)}