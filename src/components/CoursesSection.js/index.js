import React from "react";
import {
  CoursesContainer,
  CoursesH1,
  CoursesWrapper,
  CoursesCard,
  CoursesIcon,
  CoursesH2,
  CoursesP,
} from "./CoursesElements";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import Icon4 from "../../images/svg-4.svg";
import Icon5 from "../../images/svg-5.svg";


const Courses = () => {
  return (
    <>
      <CoursesContainer id="courses">
        <CoursesH1>Nuestro Cursos</CoursesH1>
        <CoursesWrapper>
          <CoursesCard>
            <CoursesIcon src={Icon1} />
            <CoursesH2>Kinder</CoursesH2>
            <CoursesP>
              Un montón de juegos, bailes e historias esperan en este curso de
              inglés para niños de 4 años. Es el momento de convertir el inglés
              en un hábito gracias a las diversas actividades divertidas. Con
              las canciones practicarán sin darse cuenta la entonación y el
              ritmo de la lengua inglesa. Los cuentos y los audilibros también
              serán grandes aliados para adentrarse en la prelectura y descubrir
              nuevas palabras y expresiones.
            </CoursesP>
          </CoursesCard>
          <CoursesCard>
            <CoursesIcon src={Icon2} />
            <CoursesH2>Kids</CoursesH2>
            <CoursesP>
              En el curso de inglés para niños de 8 años, los peques aprenderán
              a pulir todo aquello que han estado trabajando en niveles
              anteriores. Seguirán las aventuras de los superhéroes Ben&Brenda a
              través de cómics, un formato atractivo que facilita la lectura.
              Podrán formular oraciones más complejas con estructuras
              gramaticales más complicadas y una variedad léxica mucho más rica.
              Junto a nuestros profesores aprenderán a usar correctamente la
              mayoría de pronombres en inglés, serán capaces de crear rimas, de
              identificar las distintas partes de una oración y de expresarse
              con mayor claridad.
            </CoursesP>
          </CoursesCard>
          <CoursesCard>
            <CoursesIcon src={Icon3} />
            <CoursesH2>Pre Teens</CoursesH2>
            <CoursesP>
              UEl objetivo principal del curso de inglés para niños de 12 años,
              es potenciar las capacidades comunicativas tanto orales como
              escritas. A través de la historia de James, abordaremos valores y
              situaciones difíciles para esta edad, Los alumnos del curso se
              sentirán familiarizados con los temas a tratar, lo que les da
              seguridad, les mantiene motivados y les ayuda a sentirse más
              cómodos para expresarse con mayor fluidez. Gracias a que en este
              nivel, igual que en el anterior, aumentamos el tiempo de clase,
              los niños dedican más tiempo a practicar y a consolidar sus
              habilidades comunicativas en inglés. Aprenderán a dar consejos y a
              describir personalidades de forma sencilla. También empezarán a
              escribir textos más amplios.
            </CoursesP>
          </CoursesCard>
          <CoursesCard>
            <CoursesIcon src={Icon4} />
            <CoursesH2>Teens</CoursesH2>
            <CoursesP>
              UEl objetivo principal de este curso de inglés para jóvenes de 14
              años es que obtengan un nivel equivalente al del First Certificate
              in English (FCE) de Cambridge, es decir, al nivel B2 del MCER. Los
              alumnos de este nivel perfeccionarán sus habilidades de escritura
              mediante el trabajo de textos extensos, como ensayos, narraciones,
              artículos o informes en los que incluirán una gran variedad de
              palabras y estructuras complejas. A la vez nuestros profesores
              seguirán reforzando la fluidez oral de los jóvenes a la hora de
              contestar preguntas sobre rutinas diarias.
            </CoursesP>
          </CoursesCard>
          <CoursesCard>
            <CoursesIcon src={Icon5} />
            <CoursesH2>First</CoursesH2>
            <CoursesP>
              En el curso de inglés para jóvenes de 18 años, nuestro objetivo es
              los alumnos obtengan un nivel equivalente al Proficiency (CPE) de
              Cambridge, es decir, al nivel C2 inglés del MCER. En cada clase
              nos enfocaremos para que los jóvenes sean capaces de expresarse en
              inglés de forma espontánea, con soltura y precisión en cualquier
              circunstancia. Los alumnos sabrán distinguir matices sutiles de
              significado. Nuestros profesores los prepararán para escribir
              textos complejos en inglés, con estilos y registros acorde a su
              edad, así como a utilizar el vocabulario y las expresionas idóneas
              según el contexto.
            </CoursesP>
          </CoursesCard>
        </CoursesWrapper>
      </CoursesContainer>
    </>
  );
};

export default Courses;
