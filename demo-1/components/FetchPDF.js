export async function getServerSideProps(context) {
    const res = await fetch("localhost:3000")
    return res
}