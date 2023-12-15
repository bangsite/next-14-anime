
import { useRouter } from 'next/router';

export const AnimeDetail = () => {
    const router = useRouter();
    const { postId } = router.query;

    return (
        <div>
            <h1>Post ID: {postId}</h1>
            {/* Nội dung của trang */}
        </div>
    )
}
