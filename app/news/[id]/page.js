export default function NewsDetailPage({ params }) {
    const { id } = params;
    return (
        <div>
            <h1>News Detail Page {id}</h1>
            <p>This is the news detail page</p>
        </div>
    )
}
