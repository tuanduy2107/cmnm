import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

// Import các hình ảnh tương ứng
import cmnmDuyTran from '../assets/cmnmDuyTran.jpg';
import cmnmThuMai from '../assets/cmnmThuMai.jpg';
import cmnmPhanHuy from '../assets/cmnmPhanHuy.jpg';
import cmnmThanhHieu from '../assets/cmnmThanhHieu.jpg';
import cmnmMinhAnh from '../assets/cmnmMinhAnh.jpg';
import cmnmThuyDuong from '../assets/cmnmThuyDuong.jpg';
import cmnmLanVy from '../assets/cmnmLanVy.jpg';
import cmnmPhucLoc from '../assets/cmnmPhucLoc.jpg';
import cmnmQuocLong from '../assets/cmnmQuocLong.jpg';
import cmnmTangLoi from '../assets/cmnmTangLoi.jpg';
import cmnmKimNguyen from '../assets/cmnmKimNguyen.jpg';
import cmnmTuanPhuong from '../assets/cmnmTuanPhuong.jpg';
import cmnmBaoTran from '../assets/cmnmBaoTran.jpg';
import fireworksSound from '../assets/fireworks-close-29630.mp3';
import nammoiSound from '../assets/nammoi.mp3'
const GreetingForm = () => {
    const [selectedName, setSelectedName] = useState('');
    const [greeting, setGreeting] = useState('');
    const [showImage, setShowImage] = useState(false);
    const [displayedGreeting, setDisplayedGreeting] = useState('');
    const [index, setIndex] = useState(0);
    const [imageSrc, setImageSrc] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        let newGreeting = '';
        let newImageSrc = null;

        switch (selectedName) {
            case 'Duy Trần':
                newGreeting = 'Chúc mừng năm mới, Duy Trần! Năm mới mang theo những khởi đầu mới, và đó cũng là lúc mày tiếp tục hành trình đầy đam mê của mình. Là một người nhiệt huyết, năng động, và sáng tạo, mày chính là nguồn cảm hứng cho những người xung quanh. Hãy luôn tự hào với những ý tưởng táo bạo và khác biệt mà mày đang nuôi dưỡng, bởi chúng sẽ là nền tảng giúp mày tạo ra những công trình đầy dấu ấn, không chỉ mang tính thẩm mỹ mà còn hữu ích với cộng đồng. Trong năm mới này, chúc mày tiếp tục vượt qua mọi thử thách với sự kiên trì, tinh thần học hỏi không ngừng, và niềm tin vào bản thân. Hy vọng mày sẽ biến mỗi bản vẽ, mỗi mô hình trở thành một minh chứng cho sự trưởng thành và tài năng của mình. Cảm ơn mày vì đã luôn mang lại sự tích cực và năng lượng cho mọi người xung quanh. Hãy biến năm mới này thành năm của những thành tựu rực rỡ và những giấc mơ được hiện thực hóa!';
                newImageSrc = cmnmDuyTran;
                break;
            case 'Thu Mai':
                newGreeting = 'Chúc mừng năm mới, Thu Mai! Một năm mới mở ra trước mắt, mang theo vô vàn câu chuyện mới, những khoảnh khắc quý giá, và cơ hội để mày tiếp tục hành trình đam mê của mình. Là một người đầy sáng tạo và nhiệt huyết, mày không chỉ là người ghi lại những sự kiện mà còn là người truyền tải cảm xúc, giá trị và ý nghĩa thông qua từng câu chữ, từng bức ảnh. Chúc mày luôn giữ được tâm hồn nhạy cảm, đôi mắt biết tìm kiếm vẻ đẹp trong từng điều bình dị, và một trái tim đong đầy sự sẻ chia. Năm mới này, hy vọng rằng mày sẽ tiếp tục bước những bước tiến vững chắc trên con đường sự nghiệp, mở rộng tầm nhìn và chinh phục những đỉnh cao mới. Đừng quên rằng mỗi câu chuyện mày kể đều mang trong mình sức mạnh kết nối mọi người lại gần nhau hơn. Mong rằng mày sẽ có thật nhiều niềm vui, thành công, và những khoảnh khắc đầy cảm hứng để năm mới trở thành một trang kỷ niệm đáng nhớ nhất của mày!';
                newImageSrc = cmnmThuMai;
                break;
            case 'Phan Huy':
                newGreeting = 'Chúc mừng năm mới, Phan Huy! Khi một năm mới bắt đầu, đó cũng là thời điểm để chúng ta lặng nhìn lại những gì đã qua và hướng về phía trước với sự hy vọng và quyết tâm. Là một giáo viên, mày không chỉ đơn thuần giảng dạy kiến thức mà còn âm thầm gieo mầm trí tuệ, đạo đức, và niềm tin cho biết bao thế hệ học trò. Sự lặng lẽ nhưng đầy trách nhiệm của mày đã và đang tạo nên những giá trị bền vững mà không phải ai cũng dễ dàng nhận ra. Trong năm mới này, chúc mày luôn tràn đầy sức khỏe để tiếp tục công việc cao quý của mình. Mong rằng mày sẽ có thêm nhiều học trò xuất sắc, những khoảnh khắc tự hào khi thấy họ trưởng thành, và những niềm vui giản dị mà nghề giáo mang lại. Hãy luôn tự hào vì những gì mày đang làm, bởi sự cống hiến thầm lặng của mày chính là nền tảng để xây dựng một tương lai tốt đẹp hơn. Chúc mày một năm mới bình an, hạnh phúc, và đầy những niềm vui bất ngờ đáng nhớ!';
                newImageSrc = cmnmPhanHuy;
                break;
            case 'Thanh Hiếu':
                newGreeting = 'Chúc mừng năm mới, Thanh Hiếu! Cảm ơn mày vì đã luôn là một người thủ lĩnh thầm lặng nhưng đầy trách nhiệm trong dự án Hành trình Nuôi chữ 2023. Sự ít nói nhưng làm nhiều, luôn suy nghĩ cho đội ngũ của mày đã giúp cả team tiến xa hơn và chạm đến những giá trị ý nghĩa. Chúc mày trong năm mới sẽ luôn giữ được sự điềm đạm, vững vàng và sáng suốt để tiếp tục dẫn dắt những hành trình mới, không chỉ trong công việc mà còn trong cuộc sống. Mong rằng mày sẽ đạt được những thành công lớn hơn, đồng thời nhận được sự trân trọng và yêu mến từ mọi người xung quanh. Cảm ơn mày vì đã là một người đồng đội đáng tin cậy, một người lãnh đạo tuyệt vời, và một người bạn luôn âm thầm tạo nên sự khác biệt!';
                newImageSrc = cmnmThanhHieu;
                break;
            case 'Minh Anh':
                newGreeting = 'Chúc mừng năm mới, Minh Anh! Dù nhỏ tuổi nhất nhóm, nhưng em đã chứng minh rằng tuổi tác không phải là rào cản để trở thành một teamlead đáng tin cậy và đầy bản lĩnh. Sự tinh tế, sáng suốt và khả năng đối mặt với áp lực của em đã truyền cảm hứng cho cả nhóm, giúp mọi người cảm thấy an tâm trong bất kỳ hoàn cảnh nào. Chúc em trong năm mới sẽ ngày càng trưởng thành hơn, không ngừng học hỏi và phát triển bản thân để dẫn dắt thêm nhiều dự án thành công. Hy vọng em luôn giữ được trái tim nhiệt huyết và nụ cười rạng rỡ để lan tỏa sự tích cực đến tất cả mọi người xung quanh. Hãy tiếp tục tự tin và tiến lên, bởi em thực sự xứng đáng với những điều tốt đẹp nhất!';
                newImageSrc = cmnmMinhAnh;
                break;
            case 'Thùy Dương':
                newGreeting = 'Chúc mừng năm mới, Thùy Dương! Mày là người mà bất kỳ ai cũng có thể tin tưởng vì khả năng làm tốt mọi việc mày đảm nhận. Sự đa năng, tận tâm và đáng tin cậy của mày đã giúp cả nhóm vượt qua rất nhiều khó khăn và thử thách. Chúc mày trong năm mới sẽ tiếp tục phát huy những phẩm chất tuyệt vời của mình, không chỉ trong công việc mà còn trong cuộc sống. Mong rằng mày sẽ có thêm nhiều cơ hội để tỏa sáng và được công nhận xứng đáng với nỗ lực của mình. Cảm ơn mày vì đã luôn ở bên, góp sức cho thành công của nhóm và là chỗ dựa vững chắc cho mọi người. Hy vọng năm mới sẽ mang đến cho mày thật nhiều niềm vui, hạnh phúc và những bước tiến vượt bậc trên hành trình phía trước!';
                newImageSrc = cmnmThuyDuong;
                break;
            case 'Lan Vy':
                newGreeting = 'Chúc mừng năm mới, Lan Vy! mày là ngọn lửa nhiệt huyết, là nguồn năng lượng tích cực không thể thiếu trong mọi hoạt động của nhóm. Sự sôi động, vui vẻ của mày đã giúp cho không khí của team luôn tràn đầy sự thoải mái và tiếng cười. Chúc mày trong năm mới sẽ tiếp tục tỏa sáng với cá tính đặc biệt của mình, mang lại niềm vui và cảm hứng cho những người xung quanh. Hy vọng mày sẽ có thật nhiều cơ hội để khám phá và phát triển bản thân, đồng thời đạt được những thành tựu lớn trong mọi lĩnh vực mày theo đuổi. Cảm ơn mày vì đã luôn là người đồng đội tuyệt vời và là niềm vui chung của cả team!';
                newImageSrc = cmnmLanVy;
                break;
            case 'Phúc Lộc':
                newGreeting = 'Chúc mừng năm mới, Phúc Lộc! Mày là người sống tình cảm và luôn hòa đồng với tất cả mọi người, tạo nên sự gắn kết đặc biệt trong nhóm. Sự chân thành, ấm áp và luôn quan tâm đến cảm xúc của người khác đã giúp mày trở thành một thành viên không thể thiếu của team. Chúc mày trong năm mới sẽ tiếp tục lan tỏa tình yêu thương và sự sẻ chia, đồng thời đạt được những mục tiêu và ước mơ của mình. Hy vọng mày luôn giữ được nụ cười và sự nhiệt tình ấy để mang đến thật nhiều hạnh phúc cho bản thân và những người xung quanh. Cảm ơn mày vì đã luôn là một người bạn đồng hành tuyệt vời!';
                newImageSrc = cmnmPhucLoc;
                break;
            case 'Quốc Long':
                newGreeting = 'Chúc mừng năm mới, Quốc Long! Là người hiểu biết sâu rộng và luôn đưa ra những lời khuyên quý giá, anh chính là người mà mọi người có thể dựa vào khi gặp khó khăn. Chúc anh trong năm mới sẽ tiếp tục giữ vững sự thông thái, tinh thần trách nhiệm và trái tim rộng mở của mình. Mong rằng mày sẽ có thêm nhiều cơ hội để học hỏi, phát triển bản thân, và chạm đến những đỉnh cao mới trong cuộc sống. Cảm ơn anh vì đã luôn là người đồng đội chu đáo, tận tình và một người bạn tuyệt vời trong mọi hoàn cảnh!';
                newImageSrc = cmnmQuocLong;
                break;
            case 'Tăng Lợi':
                newGreeting = 'Chúc mừng năm mới, Tăng Lợi! Đối với em, anh không phải là một người anh mà là một người bạn thân thiết, nên đôi khi em hơi "hỗn" với anh =)))). Dù đôi khi "phản động tổ chức", nhưng anh là một phần không thể thiếu của nhóm. Chúc anh trong năm mới sẽ tiếp tục giữ được tinh thần vui vẻ, sự lạc quan và tính cách đáng mến? của mình. Mong rằng anh sẽ đạt được mọi mục tiêu mà anh đặt ra, và luôn có thật nhiều niềm vui bên cạnh những người yêu thương. Cảm ơn anh vì đã luôn là một người bạn đáng quý và là hậu phương? đáng tin cậy của team!';
                newImageSrc = cmnmTangLoi;
                break;
            case 'Kim Nguyên':
                newGreeting = 'Chúc mừng năm mới, Kim Nguyên! Biết nói những lời này thì mày sẽ bảo tao sến, nhưng mà thôi kệ. Với tao, mày như một đứa con nít vậy á, nhưng mà khi trong công việc thì như là một người hoàn toàn khác vậy á. Dù sắp tới, và xa hơn nữa, mày có quyết định như thế nào, thì vẫn sẽ luôn có mọi người ủng hộ quyết định đó, nên là hãy cứ làm những gì mà mày cảm thấy vui nhất thôi. Chúc mày trong năm mới này sẽ hoàn thành được những điều còn đang dang dở, và sẽ có thêm nhiều niềm vui, hạnh phúc bên gia đình và bạn bè. Cảm ơn mày vì đã luôn là một người bạn tuyệt vời, và một người đồng đội đáng tin cậy! Chúc mừng năm mới, chúc mày thi tốt!';
                newImageSrc = cmnmKimNguyen;
                break;
            case 'Tuấn Phương':
                newGreeting = 'Chúc mừng năm mới, Tuấn Phương! Sự nhiệt huyết và tinh thần bền bỉ của em trong các chuyến đi cùng team luôn là nguồn động lực to lớn cho tất cả mọi người. Chúc em trong năm mới này sẽ nhanh chóng bình phục, tràn đầy sức khỏe và năng lượng để tiếp tục hành trình đáng nhớ cùng nhóm. Cảm ơn em vì đã luôn là một người em tận tâm, hết lòng vì tập thể và luôn mang lại sự ấm áp, tin tưởng cho mọi người xung quanh. Hy vọng năm mới sẽ mang đến cho em thật nhiều niềm vui, thành công và những khoảnh khắc hạnh phúc bên gia đình và bạn bè!';
                newImageSrc = cmnmTuanPhuong;
                break;
            case 'Bảo Trân':
                newGreeting = 'Chúc mừng năm mới, Bảo Trân! Một năm mới đã đến, mang theo những cơ hội mới, những thách thức mới và những trải nghiệm mới. Mày là người luôn biết cách tận hưởng cuộc sống, đối diện với mọi khó khăn một cách mạnh mẽ và kiên định. Chúc mày trong năm mới sẽ tiếp tục giữ vững niềm tin vào bản thân, không ngừng phấn đấu và vươn lên trong mọi lĩnh vực mà mày đam mê. Hy vọng rằng mày sẽ có thêm nhiều cơ hội để thể hiện bản thân, đồng thời nhận được sự trân trọng và yêu thương từ mọi người xung quanh. Cảm ơn mày vì đã luôn là người bạn đồng hành tuyệt vời, một người đồng đội thân thiết. Chúc mừng năm mới, chúc mày sẽ có một năm mới tràn đầy hạnh phúc, thành công và những niềm vui bất ngờ!';
                newImageSrc = cmnmBaoTran;
                break;
            default:
                newGreeting = `Chúc mừng năm mới, ${selectedName}! Chúc mày một năm tràn đầy hạnh phúc và thành công!`;
                newImageSrc = null;
        }

        setGreeting(newGreeting);
        setImageSrc(newImageSrc);
        setDisplayedGreeting('');
        setShowImage(true);
        setSelectedName('');
        setIndex(0);

        // Gọi hiệu ứng pháo hoa
        triggerFireworks();
        const audio = new Audio(fireworksSound);
        audio.play();
        const sound = new Audio(nammoiSound);
        sound.play();
    };

    const triggerFireworks = () => {
        const duration = 40 * 1000;
        const animationEnd = Date.now() + duration;
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

        const fireworkFromCorner = (originX) => {
            confetti({
                particleCount: 5,
                angle: originX === 0 ? 60 : 120,
                spread: 55,
                origin: { x: originX, y: 1 },
                colors: colors,
            });
        };

        (function frame() {
            fireworkFromCorner(0);
            fireworkFromCorner(1);

            if (Date.now() < animationEnd) {
                requestAnimationFrame(frame);
            }
        })();
    };

    useEffect(() => {
        if (showImage && index < greeting.length) {
            const timeout = setTimeout(() => {
                setDisplayedGreeting((prev) => prev + greeting[index]);
                setIndex((prev) => prev + 1);
            }, 40);
            return () => clearTimeout(timeout);
        }
    }, [showImage, index, greeting]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className={`bg-white p-6 rounded shadow-md ${showImage ? 'hidden' : ''}`}>
                <h1 className="text-2xl font-bold mb-4">Chúc Mừng Năm Mới!</h1>
                <select
                    value={selectedName}
                    onChange={(e) => setSelectedName(e.target.value)}
                    className="border border-gray-300 p-2 rounded mb-4 w-full"
                    required
                >
                    <option value="" disabled>Chọn tên của mày</option>
                    <option value="Duy Trần">Duy Trần</option>
                    <option value="Thu Mai">Thu Mai</option>
                    <option value="Phan Huy">Phan Huy</option>
                    <option value="Thanh Hiếu">Thanh Hiếu</option>
                    <option value="Minh Anh">Minh Anh</option>
                    <option value="Thùy Dương">Thùy Dương</option>
                    <option value="Lan Vy">Lan Vy</option>
                    <option value="Phúc Lộc">Phúc Lộc</option>
                    <option value="Quốc Long">Quốc Long</option>
                    <option value="Tăng Lợi">Tăng Lợi</option>
                    <option value="Kim Nguyên">Kim Nguyên</option>
                    <option value="Tuấn Phương">Tuấn Phương</option>
                    <option value="Bảo Trân">Bảo Trân</option>
                </select>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Gửi
                </button>
            </form>
            {showImage && (
                <div className="flex w-full h-full">
                    <div className="relative w-1/2 h-full flex items-center justify-center">
                        {imageSrc && (
                            <img
                                src={imageSrc}
                                alt={`Chúc Mừng Năm Mới - ${selectedName}`}
                                className="absolute inset-0 w-full h-full object-cover opacity-70"
                            />
                        )}
                    </div>
                    <div className="relative w-1/2 h-full flex items-center justify-center">
                        <div className="p-4 bg-white rounded shadow-md">
                            <p className="text-xl">{displayedGreeting}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GreetingForm;
