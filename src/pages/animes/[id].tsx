
import { useRouter } from 'next/router';

export const AnimeDetail = ({id}) => {
    const router = useRouter();
    const { postId } = router.query;

    return (
        <div>
            <h1>Post ID: {postId}</h1>
            {id}
            {/* Nội dung của trang */}
        </div>
    )
}
