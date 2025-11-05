export default function ArchiveLayout({ archive, latest }) {
    return (
        <div>
            <h1>Archive Layout</h1>
            <section id="archive-header">
                {archive}
            </section>
            <section id="latest-header">
                {latest}
            </section>
        </div>
    )
}
