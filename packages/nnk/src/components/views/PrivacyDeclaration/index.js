/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ColorsPropType } from '../../../types';
import {
  PrivacyContainer,
  DeclarationTitle,
  DeclarationText,
  DeclarationSection,
  DeclarationList,
  DeclarationListItem,
  Highlight,
  Mail
} from './styles';

const PrivacyDeclaration = ({ colors }) => {
  return (
    <PrivacyContainer colors={colors}>
      <DeclarationTitle colors={colors}>
        Política de privacidad y protección de datos
      </DeclarationTitle>

      <DeclarationText>
        Desde <Highlight>NONAMEKITCHEN</Highlight> queremos seguir en contacto
        contigo para poder compartir nuestras noticias y novedades sobre
        nuestras iniciativas y acciones humanitarias. Pero siempre siendo
        transparentes a la hora de recoger tus datos personales.
      </DeclarationText>

      <DeclarationText>
        El 25 de Mayo de 2018 entró en vigor el reglamento RGPD UE 679/2016, de
        Protección de Datos a nivel Europeo y nuestra organización quiere
        mantener una rigurosa política de privacidad. Si quieres más información
        sobre qué hacemos con tus datos personales, puedes leer nuestra POLITICA
        DE PRIVACIDAD.
      </DeclarationText>

      <DeclarationSection>1.- Responsable:</DeclarationSection>
      <DeclarationList>
        <DeclarationListItem>Titular: NO NAME KITCHEN</DeclarationListItem>
        <DeclarationListItem>
          Domicilio social: CALLE LEOPOLDO ALAS 11, 7o, 33204 GIJON (ASTURIAS)
        </DeclarationListItem>
        <DeclarationListItem>CIF: G-52551207</DeclarationListItem>
        <DeclarationListItem>
          E-mail:{' '}
          <Mail href="mailto:info@noamekitchen.org">info@noamekitchen.org</Mail>
        </DeclarationListItem>
      </DeclarationList>

      <DeclarationSection>2.- Finalidad</DeclarationSection>
      <DeclarationText>
        Los datos de carácter personal que nos facilite a través del formulario
        de la página de contacto de{' '}
        <Highlight>http://nonamekitchen.org</Highlight> (en adelante “Sitio
        Web”) así como los que nos facilite en el futuro, serán incorporados a
        un registro de las actividades de tratamiento de datos titularidad de{' '}
        <Highlight>http://nonamekitchen.org</Highlight> y mantenido bajo su
        responsabilidad.
      </DeclarationText>
      <DeclarationText>
        La finalidad de dicho registro de las actividades de tratamiento es
        gestionar la relación de <Highlight>http://nonamekitchen.org</Highlight>{' '}
        con los usuarios del Sitio Web y otros clientes y proporcionarles la
        información que nos soliciten y la gestión de los servicios que nos
        contraten. Además, nos servirá para mantenerle informado acerca de
        nuestros servicios, utilizando para ello la dirección de correo
        electrónico u otros datos de contacto facilitados por el usuario con su
        consentimiento expreso.
      </DeclarationText>
      <DeclarationText>
        La información que facilita en los formularios de recogida de datos es
        voluntaria; no obstante, en caso de que no nos la facilite, no podremos
        prestarte el servicio. Será su obligación mantener actualizados los
        datos de forma tal que correspondan a la realidad en cada momento.
        Cualquier manifestación falsa o inexacta que se produzca como
        consecuencia de los datos aportados, así como los perjuicios que tal
        información pudiera causar a{' '}
        <Highlight>http://nonamekitchen.org</Highlight>, serán responsabilidad
        del usuario.
      </DeclarationText>

      <DeclarationText>
        Los datos personales proporcionados se conservarán mientras no solicite
        su supresión, con un límite de 6 años.
      </DeclarationText>

      <DeclarationSection>3.- Legitimación</DeclarationSection>
      <DeclarationText>
        La base legal para el tratamiento de sus datos es su consentimiento.
      </DeclarationText>
      <DeclarationText>
        <Highlight>http://nonamekitchen.org</Highlight> no tomará decisiones
        automatizadas, perfiles o lógica aplicada a sus datos. No se tratan
        datos especialmente protegidos.
      </DeclarationText>

      <DeclarationSection>4.- Destinatarios</DeclarationSection>
      <DeclarationText>
        <Highlight>http://nonamekitchen.org</Highlight> no cederá datos a
        terceros salvo obligación legal.
      </DeclarationText>

      <DeclarationSection>5.- Derechos</DeclarationSection>
      <DeclarationText>
        Cualquier persona tiene derecho a obtener confirmación sobre si en{' '}
        <Highlight>http://nonamekitchen.org</Highlight> estamos tratado datos
        personales que les conciernan, o no.
      </DeclarationText>
      <DeclarationText>
        Las personas interesadas tienen derecho a acceder a sus datos
        personales, así como a solicitar la rectificación de los datos inexactos
        o, en su caso, solicitar su supresión cuando, entre otros motivos, los
        datos ya no sean necesarios para los fines que fueron recogidos.
      </DeclarationText>
      <DeclarationText>
        En determinadas circunstancias, los interesados podrán solicitar la
        limitación del tratamiento de sus datos, en cuyo caso únicamente los
        conservaremos para el ejercicio o la defensa de reclamaciones.
      </DeclarationText>
      <DeclarationText>
        En determinadas circunstancias, y por motivos relacionados con su
        situación particular, los interesados podrán oponerse al tratamiento de
        sus datos. <Highlight>http://nonamekitchen.org</Highlight> dejará de
        tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio
        o la defensa de posibles reclamaciones.
      </DeclarationText>

      <DeclarationText>Resumen de Derechos:</DeclarationText>

      <DeclarationList>
        <DeclarationListItem>
          Derecho a solicitar el acceso a sus datos personales.
        </DeclarationListItem>
        <DeclarationListItem>
          Derecho a solicitar su rectificación o supresión.
        </DeclarationListItem>
        <DeclarationListItem>
          Derecho a solicitar la limitación de su tratamiento.
        </DeclarationListItem>
        <DeclarationListItem>
          Derecho a oponerse al tratamiento.
        </DeclarationListItem>
        <DeclarationListItem>
          Derecho a la portabilidad de los datos.
        </DeclarationListItem>
        <DeclarationListItem>
          Derecho a retirar el consentimiento prestado.
        </DeclarationListItem>
      </DeclarationList>

      <DeclarationText>
        La persona usuaria podrá ejercer los mencionados derechos en cualquier
        momento, mediante escrito dirigido a la siguiente dirección de correo
        electrónico{' '}
        <Mail href="mailto:info@noamekitchen.org">info@nonamekitchen.org</Mail>{' '}
        o al domicilio de <Highlight>http://nonamekitchen.org</Highlight> sito
        en: CALLE LEOPOLDO ALAS 11, 7o, 33204 GIJON (ASTURIAS).
      </DeclarationText>
      <DeclarationText>
        Para poder tramitar la solicitud de ejercicio de derechos, será
        necesario comprobar la identidad del usuario, por lo que dicha
        comunicación deberá incluir nombre y apellidos, petición en que se
        concreta la solicitud, dirección a efectos de notificaciones, fecha,
        firma y fotocopia del DNI u otro documento válido identificativo. El
        ejercicio de estos derechos no afectará en modo alguno al acceso a la
        página web.
      </DeclarationText>
      <DeclarationText>
        Para más información sobre el ejercicio de derechos, puede acudir a la
        web de la Agencia Española de Protección de Datos.
      </DeclarationText>
      <DeclarationText>
        Si considera que hay un problema con la forma en que{' '}
        <Highlight>http://nonamekitchen.org</Highlight> está tratando sus datos,
        puede dirigir sus reclamaciones a la autoridad de protección de datos
        que corresponda, siendo la Agencia Española de Protección de Datos la
        indicada en el caso de España.
      </DeclarationText>
    </PrivacyContainer>
  );
};

PrivacyDeclaration.propTypes = {
  colors: ColorsPropType.isRequired
};

export default PrivacyDeclaration;
