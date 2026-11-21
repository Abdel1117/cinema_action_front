import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../../Compenants/PageHeader'
import Provisional from '../../Compenants/Provisional'
import Question from '../../Compenants/Question/Question'
import { ArrowRight } from '../../Compenants/Icons'
import { QuestionGroups } from '../../assets/Data/QuestionList'

export default function Faq() {
    return (
        <main id="contenu">
            <PageHeader
                title="Questions fréquentes"
                lead="Le concours, le film, l'inscription : les réponses aux questions qu'on nous pose le plus souvent."
            >
                <Provisional className="mt-6">Réponses provisoires, en cours de validation par l'organisation.</Provisional>
            </PageHeader>

            <div className="wrap grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24">
                <nav aria-label="Rubriques" className="lg:col-span-3">
                    <ul className="flex flex-wrap gap-x-6 gap-y-3 lg:sticky lg:top-32 lg:flex-col">
                        {QuestionGroups.map((group) => (
                            <li key={group.id}>
                                <a
                                    href={`#${group.id}`}
                                    className="text-base font-medium text-mute transition-colors duration-150 hover:text-paper"
                                >
                                    {group.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="space-y-20 lg:col-span-8 lg:col-start-5">
                    {QuestionGroups.map((group) => (
                        <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`}>
                            <h2 id={`${group.id}-title`} className="display border-b border-line pb-6 text-[clamp(2rem,3.5vw,3rem)]">
                                {group.title}
                            </h2>
                            {group.questions.map((q) => (
                                <Question key={q.id} question={q} />
                            ))}
                        </section>
                    ))}

                    <div className="border border-line p-8 lg:p-10">
                        <h2 className="text-2xl font-semibold text-paper">Vous ne trouvez pas votre réponse ?</h2>
                        <p className="mt-3 max-w-prose text-base leading-relaxed text-mute">
                            Le formulaire de contact arrive bientôt. En attendant, les conditions de participation
                            détaillent la durée, le thème, les formats et la sécurité.
                        </p>
                        <Link to="/participer" className="link-arrow mt-6 text-paper hover:text-mute">
                            Conditions de participation
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
