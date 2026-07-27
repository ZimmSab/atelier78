export default function Impressum() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-semibold mb-8">
        Impressum
      </h1>

      <div className="space-y-8 text-[#4A4A4A] leading-relaxed">

        <section>
          <h2 className="text-xl font-medium text-[#20334F] mb-3">
            Angaben gemäß § 5 TMG
          </h2>

          <p>
            Atelier N°78<br />
            [Vorname Nachname]<br />
            [Geschäftsanschrift]<br />
            [PLZ Ort]<br />
            Deutschland
          </p>
        </section>


        <section>
          <h2 className="text-xl font-medium text-[#20334F] mb-3">
            Kontakt
          </h2>

          <p>
            E-Mail: sabrina.zimmermann@atelier78.de
          </p>
        </section>


        <section>
          <h2 className="text-xl font-medium text-[#20334F] mb-3">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </h2>

          <p>
            [Vorname Nachname]<br />
            [Geschäftsanschrift]
          </p>
        </section>


        <section>
          <h2 className="text-xl font-medium text-[#20334F] mb-3">
            Haftung für Inhalte
          </h2>

          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
            Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen
            zu überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>


        <section>
          <h2 className="text-xl font-medium text-[#20334F] mb-3">
            Haftung für Links
          </h2>

          <p>
            Diese Website enthält gegebenenfalls Links zu externen Websites
            Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
            können wir für diese fremden Inhalte keine Gewähr übernehmen.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige
            Anbieter oder Betreiber verantwortlich.
          </p>
        </section>


        <section>
          <h2 className="text-xl font-medium text-[#20334F] mb-3">
            Urheberrecht
          </h2>

          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
            dieser Website unterliegen dem deutschen Urheberrecht.
            Die Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der
            Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung
            des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

      </div>
    </main>
  );
}