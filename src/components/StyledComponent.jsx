import { useContext } from "react";
import { LayoutPreferencesContext } from "./LayoutPreferencesContext";

const StyledComponent = () => {
    const { preferences } = useContext(LayoutPreferencesContext);

    const style = {
        padding: preferences.spacing === 'small' ? '5px' : preferences.spacing === 'large' ? '20px' : '10px',
        fontFamily: preferences.font
    };

    const texts = {
        pt: {
            title: 'Balerion, O Terror Negro',
            content: "'A última criatura viva a ver a Antiga Valíria antes da perdição.' É assim que o rei Viserys I descreve Balerion à filha Rhaenyra. Foi o dragão mais poderoso que já voou sobre Westeros e foi vital para a conquista dos Sete Reinos pela família Targaryen, segundo as descrições que aparecem nos livros de George R. R. Martin, Balerion era um dragão gigante(o maior que já habitou nesse mundo), cuja sombra era capaz de cobrir vilarejos inteiros. As suas escamas eram escuras, assim como o fogo que ele soltava e os dentes eram tão longos e afiados quanto espadas. Balerion ajudou a forjar o Trono de Ferro, derretendo as espadas dos inimigos derrotados do Rei Aegon I. Seus montadores foram o rei Aegon I, o rei Maegor I, a princesa Aerea e o rei Viserys I e sua morte foi no ano 94 a.C (após a Conquista)."
        },
        en: {
            title: 'Balerion, The Black Dread',
            content: "'The last living creature to see Old Valyria before it's perdition.' This is how King Viserys I describes Balerion to his daughter Rhaenyra. It was the most powerful dragon that ever flew over Westeros and was vital for the conquest of the Seven Kingdoms by the Targaryen family, according to the descriptions that appeared in George R. R. Martin's books, Balerion was a giant dragon (the largest that ever inhabited this world), whose shadow was capable of covering entire villages. His scales were dark, just like the fire he released, and his teeth were as long and sharp as swords. Balerion helped forge the Iron Throne, melting the swords of King Aegon I's defeated enemies. His assemblers were King Aegon I, King Maegor I, Princess Aerea and King Viserys I and his death was in 94 a.C (after the Conquest)."
        },
        es: {
            title: 'Balerion, El Terror Negro',
            content: "'La última criatura viviente que vio la Vieja Valyria antes de la perdición.' Así describe el rey Viserys I a Balerion a su hija Rhaenyra. Fue el dragón más poderoso que jamás sobrevoló Poniente y fue vital para la conquista de los Siete Reinos por parte de la familia Targaryen, según las descripciones que aparecieron en los libros de George R. R. Martin, Balerion era un dragón gigante (el más grande que jamás habitó este mundo), cuya sombra era capaz de cubrir pueblos enteros. Sus escamas eran oscuras, como el fuego que soltó, y sus dientes eran largos y afilados como espadas. Balerion ayudó a forjar el Trono de Hierro, derritiendo las espadas de los enemigos derrotados del rey Aegon I. Sus ensambladores fueron el rey Aegon I, el rey Maegor I, la princesa Aerea y el rey Viserys I y su muerte fue en el 94 d.C. (después de la Conquista)."
        }
    }

    const { title, content } = texts[preferences.lang];

    return (
        <div id="conteudo" style={style}>
            <h1>{title}</h1>
            <p>{content}</p>
            <img src="./balerion.jpg" width={800}></img>
        </div>
    )
}

export default StyledComponent