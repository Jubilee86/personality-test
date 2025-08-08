const questions = [
    {
        question: "새로운 사람들과의 만남에서 당신은?",
        options: [
            { text: "먼저 다가가서 대화를 시작한다", type: "E" },
            { text: "상대방이 먼저 말을 걸어주길 기다린다", type: "I" }
        ]
    },
    {
        question: "계획을 세울 때 당신의 스타일은?",
        options: [
            { text: "상세한 계획을 미리 세우고 따른다", type: "J" },
            { text: "대략적인 방향만 정하고 유연하게 행동한다", type: "P" }
        ]
    },
    {
        question: "문제를 해결할 때 당신은?",
        options: [
            { text: "논리적이고 객관적으로 분석한다", type: "T" },
            { text: "감정과 사람들의 입장을 고려한다", type: "F" }
        ]
    },
    {
        question: "정보를 받아들일 때 당신은?",
        options: [
            { text: "구체적인 사실과 경험을 중시한다", type: "S" },
            { text: "가능성과 의미를 탐구한다", type: "N" }
        ]
    },
    {
        question: "스트레스를 받을 때 당신은?",
        options: [
            { text: "혼자 있는 시간을 갖고 싶어한다", type: "I" },
            { text: "사람들과 함께 있으며 해소한다", type: "E" }
        ]
    },
    {
        question: "결정을 내릴 때 당신은?",
        options: [
            { text: "충분히 생각하고 신중하게 결정한다", type: "J" },
            { text: "직감을 믿고 빠르게 결정한다", type: "P" }
        ]
    },
    {
        question: "갈등 상황에서 당신은?",
        options: [
            { text: "원칙과 규칙에 따라 해결한다", type: "T" },
            { text: "모든 사람이 만족할 수 있는 방법을 찾는다", type: "F" }
        ]
    },
    {
        question: "새로운 아이디어에 대해 당신은?",
        options: [
            { text: "실현 가능성을 먼저 검토한다", type: "S" },
            { text: "창의적인 가능성에 흥미를 느낀다", type: "N" }
        ]
    },
    {
        question: "휴일을 보낼 때 당신은?",
        options: [
            { text: "집에서 편안하게 쉬는 것을 좋아한다", type: "I" },
            { text: "밖에 나가서 활동적으로 보낸다", type: "E" }
        ]
    },
    {
        question: "일을 할 때 당신은?",
        options: [
            { text: "마감일을 지키며 체계적으로 진행한다", type: "J" },
            { text: "영감이 올 때까지 기다리며 유연하게 한다", type: "P" }
        ]
    },
    {
        question: "팀 프로젝트에서 당신의 역할은?",
        options: [
            { text: "적극적으로 의견을 제시하고 토론을 이끈다", type: "E" },
            { text: "신중하게 듣고 필요할 때만 발언한다", type: "I" }
        ]
    },
    {
        question: "여행을 계획할 때 당신은?",
        options: [
            { text: "일정표를 상세히 짜고 예약을 미리 한다", type: "J" },
            { text: "대략적인 계획만 세우고 현지에서 즉흥적으로", type: "P" }
        ]
    },
    {
        question: "비판을 받을 때 당신은?",
        options: [
            { text: "객관적 사실인지 논리적으로 분석한다", type: "T" },
            { text: "상처받지만 상대의 의도를 이해하려 노력한다", type: "F" }
        ]
    },
    {
        question: "새로운 취미를 시작할 때 당신은?",
        options: [
            { text: "기초부터 체계적으로 배워나간다", type: "S" },
            { text: "전체적인 그림을 그리며 창의적으로 접근한다", type: "N" }
        ]
    },
    {
        question: "친구와의 대화에서 당신은?",
        options: [
            { text: "활발하게 이야기하며 에너지를 얻는다", type: "E" },
            { text: "깊이 있는 대화를 통해 친밀감을 느낀다", type: "I" }
        ]
    },
    {
        question: "시험 준비를 할 때 당신은?",
        options: [
            { text: "계획표를 만들어 꾸준히 공부한다", type: "J" },
            { text: "막판에 집중적으로 몰아서 공부한다", type: "P" }
        ]
    },
    {
        question: "의견 차이가 있을 때 당신은?",
        options: [
            { text: "논리와 근거를 바탕으로 설득한다", type: "T" },
            { text: "서로의 감정을 배려하며 타협점을 찾는다", type: "F" }
        ]
    },
    {
        question: "책을 읽을 때 당신은?",
        options: [
            { text: "실용적이고 구체적인 정보를 선호한다", type: "S" },
            { text: "상상력을 자극하는 추상적 내용을 좋아한다", type: "N" }
        ]
    },
    {
        question: "파티나 모임에서 당신은?",
        options: [
            { text: "여러 사람과 폭넓게 대화한다", type: "E" },
            { text: "소수의 사람과 깊은 대화를 나눈다", type: "I" }
        ]
    },
    {
        question: "새로운 환경에 적응할 때 당신은?",
        options: [
            { text: "규칙과 시스템을 먼저 파악한다", type: "J" },
            { text: "상황에 따라 유연하게 대응한다", type: "P" }
        ]
    }
];

const personalities = {
    "ENFJ": { 
        male: { name: "에겐남", description: "🌟 따뜻하고 카리스마 있는 천상 에겐남! 당신은 타고난 리더십과 공감 능력을 겸비한 인싸의 정석입니다.\n\n💫 일상에서는 항상 주변 사람들을 챙기고, 누군가 힘들어하면 가만히 있지 못하는 타입이에요. 친구들의 고민 상담사 역할을 자처하며, '너 괜찮아?' 한 마디로 분위기를 따뜻하게 만드는 마법사입니다.\n\n🤝 대인관계에서는 상대방의 감정을 민감하게 파악하고, 모든 사람이 소외되지 않도록 세심하게 배려하는 능력이 뛰어나요. 단체톡에서 분위기 메이커 역할을 도맡아 하는 그런 사람!\n\n✨ 가장 큰 장점은 다른 사람의 잠재력을 알아보고 끌어올려주는 재능이 있다는 것. 주변 사람들이 당신 덕분에 성장하는 경우가 많을 거예요.\n\n🎯 다만 가끔 다른 사람 일에 너무 개입하려 하거나, 본인의 감정은 뒤로 미루는 경향이 있으니 자기 관리도 챙기세요!\n\n🏢 교육, 상담, 기획 분야에서 빛을 발하며, 팀 프로젝트에서는 자연스럽게 리더가 되는 타입입니다.\n\n🎨 특이한 점은 다른 사람의 생일이나 기념일을 기가 막히게 챙기면서도, 정작 본인 것은 잊어버리는 귀여운 면이 있어요. 진정한 에겐남의 증거입니다! 💕" },
        female: { name: "에겐녀", description: "🌟 따뜻하고 카리스마 있는 천상 에겐녀! 당신은 타고난 리더십과 공감 능력을 겸비한 인싸의 정석입니다.\n\n💫 일상에서는 항상 주변 사람들을 챙기고, 누군가 힘들어하면 가만히 있지 못하는 타입이에요. 친구들의 고민 상담사 역할을 자처하며, '언니가 다 해결해줄게' 한 마디로 든든함을 주는 마법사입니다.\n\n🤝 대인관계에서는 상대방의 감정을 민감하게 파악하고, 모든 사람이 소외되지 않도록 세심하게 배려하는 능력이 뛰어나요. 단체톡에서 분위기 메이커 역할을 도맡아 하는 그런 사람!\n\n✨ 가장 큰 장점은 다른 사람의 잠재력을 알아보고 끌어올려주는 재능이 있다는 것. 주변 사람들이 당신 덕분에 성장하는 경우가 많을 거예요.\n\n🎯 다만 가끔 다른 사람 일에 너무 개입하려 하거나, 본인의 감정은 뒤로 미루는 경향이 있으니 자기 관리도 챙기세요!\n\n🏢 교육, 상담, 기획 분야에서 빛을 발하며, 팀 프로젝트에서는 자연스럽게 리더가 되는 타입입니다.\n\n🎨 특이한 점은 다른 사람의 생일이나 기념일을 기가 막히게 챙기면서도, 정작 본인 것은 잊어버리는 귀여운 면이 있어요. 진정한 에겐녀의 증거입니다! 💕" }
    },
    "ENFP": { 
        male: { name: "에겐남", description: "🎨 자유로운 영혼의 크리에이티브 에겐남! 당신은 아이디어 뱅크이자 분위기 메이커의 완벽한 조합입니다.\n\n🌈 일상에서는 '이거 어때? 저거는?' 하면서 끊임없이 새로운 것을 제안하는 타입이에요. 지루한 건 질색하고, 항상 재미있고 의미 있는 일을 찾아다니는 모험가 기질이 있습니다.\n\n💝 대인관계에서는 진짜 따뜻하고 순수한 마음으로 사람들을 대해요. 상대방의 가능성을 믿어주고 응원해주는 천상 치어리더! 덕분에 주변 사람들이 용기를 얻는 경우가 많죠.\n\n✨ 가장 큰 장점은 무한한 창의력과 열정! 다른 사람들이 포기하려 할 때 '할 수 있어!' 하며 동기부여 해주는 능력이 대단해요. 새로운 관점으로 문제를 해결하는 것도 특기입니다.\n\n🎯 다만 시작은 화려하게 하지만 마무리가 약한 편이고, 여러 가지에 관심이 많다 보니 집중력이 분산되기 쉬워요. 계획성을 좀 더 기르면 금상첨화!\n\n🏢 기획, 마케팅, 예술 분야에서 재능을 발휘하며, 자유로운 환경에서 창의력을 마음껏 펼칠 수 있는 곳이 최고예요.\n\n🎪 특이한 점은 갑자기 새벽에 '아! 이거 하면 대박일 것 같은데?' 하면서 친구들을 깨우는 경우가 종종 있다는 것. 그래도 미워할 수 없는 매력덩어리 에겐남입니다! 🌟" },
        female: { name: "에겐녀", description: "🎨 자유로운 영혼의 크리에이티브 에겐녀! 당신은 아이디어 뱅크이자 분위기 메이커의 완벽한 조합입니다.\n\n🌈 일상에서는 '언니들 이거 어때? 저거는?' 하면서 끊임없이 새로운 것을 제안하는 타입이에요. 지루한 건 질색하고, 항상 재미있고 의미 있는 일을 찾아다니는 모험가 기질이 있습니다.\n\n💝 대인관계에서는 진짜 따뜻하고 순수한 마음으로 사람들을 대해요. 상대방의 가능성을 믿어주고 응원해주는 천상 치어리더! 덕분에 주변 사람들이 용기를 얻는 경우가 많죠.\n\n✨ 가장 큰 장점은 무한한 창의력과 열정! 다른 사람들이 포기하려 할 때 '할 수 있어!' 하며 동기부여 해주는 능력이 대단해요. 새로운 관점으로 문제를 해결하는 것도 특기입니다.\n\n🎯 다만 시작은 화려하게 하지만 마무리가 약한 편이고, 여러 가지에 관심이 많다 보니 집중력이 분산되기 쉬워요. 계획성을 좀 더 기르면 금상첨화!\n\n🏢 기획, 마케팅, 예술 분야에서 재능을 발휘하며, 자유로운 환경에서 창의력을 마음껏 펼칠 수 있는 곳이 최고예요.\n\n🎪 특이한 점은 갑자기 새벽에 '아! 이거 하면 대박일 것 같은데?' 하면서 친구들을 깨우는 경우가 종종 있다는 것. 그래도 미워할 수 없는 매력덩어리 에겐녀입니다! 🌟" }
    },
    "ENTJ": { 
        male: { name: "테토남", description: "👑 타고난 리더의 DNA를 가진 완벽한 테토남! 당신은 카리스마와 실행력을 겸비한 천상 보스입니다.\n\n⚡ 일상에서는 효율성을 추구하며, '이렇게 하면 더 빠르고 좋지 않을까?'라는 생각을 항상 하는 타입이에요. 계획 세우는 걸 좋아하고, 그 계획을 실행에 옮기는 추진력도 대단합니다.\n\n🎯 대인관계에서는 직설적이고 솔직한 편이라 때로는 차갑게 느껴질 수 있지만, 실제로는 팀의 성공을 진심으로 원하는 든든한 리더예요. 목표 달성을 위해서라면 밤새워 일하는 것도 마다하지 않죠.\n\n💪 가장 큰 장점은 큰 그림을 그리고 전략을 세우는 능력! 복잡한 문제를 체계적으로 분석하고 해결책을 찾아내는 실력이 뛰어나며, 다른 사람들을 동기부여 시키는 것도 잘해요.\n\n🔍 다만 완벽주의 성향이 강해서 자신과 타인에게 높은 기준을 요구하는 경향이 있어요. 가끔은 여유를 갖고 다른 사람의 속도를 이해해주는 것도 필요합니다.\n\n🏢 경영, 전략기획, 프로젝트 관리 분야에서 빛을 발하며, 도전적이고 성과 중심의 환경에서 최고의 능력을 발휘해요.\n\n⏰ 특이한 점은 항상 시간을 효율적으로 쓰려고 하다 보니, 엘리베이터에서도 이메일을 확인하거나 계단 오르면서 전화통화를 하는 멀티태스킹의 달인입니다! 진정한 테토남의 면모죠! 🚀" },
        female: { name: "테토녀", description: "👑 타고난 리더의 DNA를 가진 완벽한 테토녀! 당신은 카리스마와 실행력을 겸비한 천상 보스입니다.\n\n⚡ 일상에서는 효율성을 추구하며, '이렇게 하면 더 빠르고 좋지 않을까?'라는 생각을 항상 하는 타입이에요. 계획 세우는 걸 좋아하고, 그 계획을 실행에 옮기는 추진력도 대단합니다.\n\n🎯 대인관계에서는 직설적이고 솔직한 편이라 때로는 차갑게 느껴질 수 있지만, 실제로는 팀의 성공을 진심으로 원하는 든든한 언니예요. 목표 달성을 위해서라면 밤새워 일하는 것도 마다하지 않죠.\n\n💪 가장 큰 장점은 큰 그림을 그리고 전략을 세우는 능력! 복잡한 문제를 체계적으로 분석하고 해결책을 찾아내는 실력이 뛰어나며, 다른 사람들을 동기부여 시키는 것도 잘해요.\n\n🔍 다만 완벽주의 성향이 강해서 자신과 타인에게 높은 기준을 요구하는 경향이 있어요. 가끔은 여유를 갖고 다른 사람의 속도를 이해해주는 것도 필요합니다.\n\n🏢 경영, 전략기획, 프로젝트 관리 분야에서 빛을 발하며, 도전적이고 성과 중심의 환경에서 최고의 능력을 발휘해요.\n\n⏰ 특이한 점은 항상 시간을 효율적으로 쓰려고 하다 보니, 엘리베이터에서도 이메일을 확인하거나 계단 오르면서 전화통화를 하는 멀티태스킹의 달인입니다! 진정한 테토녀의 면모죠! 🚀" }
    },
    "ENTP": { 
        male: { name: "테토남", description: "🧠 천재적인 아이디어와 논리의 완벽한 조합, 테토남! 당신은 창의성과 분석력을 동시에 갖춘 만능 브레인입니다.\n\n⚡ 일상에서는 '왜?', '만약에?', '그런데 이건 어때?'라는 질문을 끊임없이 던지는 타입이에요. 기존의 방식에 의문을 제기하고, 더 혁신적이고 효율적인 방법을 찾아내는 것을 즐깁니다. 루틴보다는 변화와 도전을 선호하죠.\n\n🎯 대인관계에서는 토론과 논쟁을 좋아하는데, 이건 상대방을 이기려는 게 아니라 진짜 진리를 찾고 싶어서예요. 다양한 관점을 듣고 자신의 생각을 발전시키는 과정을 즐기는 지적 호기심의 덩어리입니다.\n\n🚀 가장 큰 장점은 기존 시스템의 문제점을 빠르게 파악하고 혁신적인 대안을 제시하는 능력! 복잡한 문제일수록 더 흥미를 느끼며, '불가능'이라는 말을 들으면 오히려 더 도전 정신이 불타오르는 타입이에요.\n\n⚠️ 다만 아이디어는 넘쳐나지만 실행력이 부족하거나, 디테일한 작업보다는 큰 그림에만 관심이 있어서 마무리가 아쉬울 때가 있어요. 꾸준함과 인내심을 기르면 금상첨화!\n\n💼 IT, 컨설팅, 연구개발, 창업 분야에서 재능을 발휘하며, 변화가 빠르고 창의성이 요구되는 환경에서 최고의 성과를 내요.\n\n🎪 특이한 점은 밤늦게 갑자기 '세상을 바꿀 아이디어'가 떠올라서 친구들에게 3시간짜리 장문의 메시지를 보내는 경우가 종종 있다는 것. 그래도 그 아이디어들이 의외로 괜찮아서 미워할 수 없는 매력적인 테토남입니다! 🌟" },
        female: { name: "테토녀", description: "🧠 천재적인 아이디어와 논리의 완벽한 조합, 테토녀! 당신은 창의성과 분석력을 동시에 갖춘 만능 브레인입니다.\n\n⚡ 일상에서는 '왜?', '만약에?', '그런데 이건 어때?'라는 질문을 끊임없이 던지는 타입이에요. 기존의 방식에 의문을 제기하고, 더 혁신적이고 효율적인 방법을 찾아내는 것을 즐깁니다. 루틴보다는 변화와 도전을 선호하죠.\n\n🎯 대인관계에서는 토론과 논쟁을 좋아하는데, 이건 상대방을 이기려는 게 아니라 진짜 진리를 찾고 싶어서예요. 다양한 관점을 듣고 자신의 생각을 발전시키는 과정을 즐기는 지적 호기심의 덩어리입니다.\n\n🚀 가장 큰 장점은 기존 시스템의 문제점을 빠르게 파악하고 혁신적인 대안을 제시하는 능력! 복잡한 문제일수록 더 흥미를 느끼며, '불가능'이라는 말을 들으면 오히려 더 도전 정신이 불타오르는 타입이에요.\n\n⚠️ 다만 아이디어는 넘쳐나지만 실행력이 부족하거나, 디테일한 작업보다는 큰 그림에만 관심이 있어서 마무리가 아쉬울 때가 있어요. 꾸준함과 인내심을 기르면 금상첨화!\n\n💼 IT, 컨설팅, 연구개발, 창업 분야에서 재능을 발휘하며, 변화가 빠르고 창의성이 요구되는 환경에서 최고의 성과를 내요.\n\n🎪 특이한 점은 밤늦게 갑자기 '세상을 바꿀 아이디어'가 떠올라서 친구들에게 3시간짜리 장문의 메시지를 보내는 경우가 종종 있다는 것. 그래도 그 아이디어들이 의외로 괜찮아서 미워할 수 없는 매력적인 테토녀입니다! 🌟" }
    }
};

let currentQuestion = 0;
let answers = [];
let totalQuestions = questions.length;

document.addEventListener('DOMContentLoaded', function() {
    showQuestion();
    updateProgress();
});

function showQuestion() {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const questionNumberElement = document.getElementById('question-number');

    if (currentQuestion < totalQuestions) {
        const q = questions[currentQuestion];
        
        questionNumberElement.textContent = `질문 ${currentQuestion + 1} / ${totalQuestions}`;
        questionContainer.textContent = q.question;
        
        optionsContainer.innerHTML = '';
        q.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option.text;
            optionElement.onclick = () => selectOption(index);
            optionsContainer.appendChild(optionElement);
        });
        
        document.getElementById('next-btn').style.display = 'none';
    }
}

function selectOption(selectedIndex) {
    const options = document.querySelectorAll('.option');
    
    // 이전 선택 제거
    options.forEach(option => option.classList.remove('selected', 'selecting'));
    
    // 선택 효과 추가
    options[selectedIndex].classList.add('selecting');
    
    // 애니메이션 효과를 위한 짧은 지연
    setTimeout(() => {
        options[selectedIndex].classList.remove('selecting');
        options[selectedIndex].classList.add('selected');
        
        // 답변 저장
        answers[currentQuestion] = questions[currentQuestion].options[selectedIndex].type;
        
        // 다음 버튼 활성화
        document.getElementById('next-btn').style.display = 'inline-block';
    }, 150);
}

function nextQuestion() {
    if (answers[currentQuestion]) {
        currentQuestion++;
        updateProgress();
        
        if (currentQuestion < totalQuestions) {
            showQuestion();
        } else {
            showResult();
        }
    }
}

function updateProgress() {
    const progressElement = document.getElementById('progress');
    const progressPercentage = (currentQuestion / totalQuestions) * 100;
    progressElement.style.width = progressPercentage + '%';
}

function showResult() {
    // MBTI 타입 계산
    const types = {
        'E': 0, 'I': 0,
        'S': 0, 'N': 0,
        'T': 0, 'F': 0,
        'J': 0, 'P': 0
    };
    
    answers.forEach(answer => {
        types[answer]++;
    });
    
    const mbti = 
        (types['E'] > types['I'] ? 'E' : 'I') +
        (types['S'] > types['N'] ? 'S' : 'N') +
        (types['T'] > types['F'] ? 'T' : 'F') +
        (types['J'] > types['P'] ? 'J' : 'P');
    
    // 이미 선택된 성별 사용
    const gender = selectedGender === "남자" ? "male" : "female";
    
    const personality = personalities[mbti];
    const result = personality ? personality[gender] : null;
    
    if (result) {
        // 결과 표시
        document.getElementById('test-area').style.display = 'none';
        document.getElementById('result-area').style.display = 'block';
        
        document.getElementById('result-type').textContent = result.name;
        document.getElementById('result-description').textContent = result.description;
        
        // 성격 유형별 비율 계산
        showPercentageAnalysis(types);
        
        // 공유 기능 설정
        setupSocialSharing(result.name, mbti);
    }
}

function showPercentageAnalysis(types) {
    const analysisContainer = document.getElementById('percentage-analysis');
    
    // E/I 비교
    const eiTotal = types['E'] + types['I'];
    const ePercent = Math.round((types['E'] / eiTotal) * 100);
    const iPercent = Math.round((types['I'] / eiTotal) * 100);
    
    // S/N 비교  
    const snTotal = types['S'] + types['N'];
    const sPercent = Math.round((types['S'] / snTotal) * 100);
    const nPercent = Math.round((types['N'] / snTotal) * 100);
    
    // T/F 비교
    const tfTotal = types['T'] + types['F'];
    const tPercent = Math.round((types['T'] / tfTotal) * 100);
    const fPercent = Math.round((types['F'] / tfTotal) * 100);
    
    // J/P 비교
    const jpTotal = types['J'] + types['P'];
    const jPercent = Math.round((types['J'] / jpTotal) * 100);
    const pPercent = Math.round((types['P'] / jpTotal) * 100);
    
    analysisContainer.innerHTML = `
        <div class="percentage-title">성격 유형별 비율 분석</div>
        
        <div class="comparison-bar">
            <div class="comparison-fill-left" style="width: ${ePercent}%"></div>
            <div class="comparison-fill-right" style="width: ${iPercent}%"></div>
        </div>
        <div class="comparison-labels">
            <span class="comparison-left">외향형(E) ${ePercent}%</span>
            <span class="comparison-right">내향형(I) ${iPercent}%</span>
        </div>
        
        <div class="comparison-bar">
            <div class="comparison-fill-left" style="width: ${sPercent}%"></div>
            <div class="comparison-fill-right" style="width: ${nPercent}%"></div>
        </div>
        <div class="comparison-labels">
            <span class="comparison-left">감각형(S) ${sPercent}%</span>
            <span class="comparison-right">직관형(N) ${nPercent}%</span>
        </div>
        
        <div class="comparison-bar">
            <div class="comparison-fill-left" style="width: ${tPercent}%"></div>
            <div class="comparison-fill-right" style="width: ${fPercent}%"></div>
        </div>
        <div class="comparison-labels">
            <span class="comparison-left">사고형(T) ${tPercent}%</span>
            <span class="comparison-right">감정형(F) ${fPercent}%</span>
        </div>
        
        <div class="comparison-bar">
            <div class="comparison-fill-left" style="width: ${jPercent}%"></div>
            <div class="comparison-fill-right" style="width: ${pPercent}%"></div>
        </div>
        <div class="comparison-labels">
            <span class="comparison-left">판단형(J) ${jPercent}%</span>
            <span class="comparison-right">인식형(P) ${pPercent}%</span>
        </div>
    `;
}

function setupSocialSharing(resultName, mbti) {
    const shareText = `나는 ${resultName}! MBTI 기반 성격 테스트 결과를 확인해보세요!`;
    const shareUrl = window.location.href;
    
    // 카카오톡 공유
    document.getElementById('kakao-share').onclick = function() {
        if (typeof Kakao !== 'undefined') {
            Kakao.Link.sendDefault({
                objectType: 'feed',
                content: {
                    title: `나는 ${resultName}!`,
                    description: shareText,
                    imageUrl: 'https://jubilee86.github.io/images/personality-test-thumbnail.png',
                    link: {
                        mobileWebUrl: shareUrl,
                        webUrl: shareUrl
                    }
                },
                buttons: [{
                    title: '테스트하기',
                    link: {
                        mobileWebUrl: shareUrl,
                        webUrl: shareUrl
                    }
                }]
            });
        } else {
            copyToClipboard(shareText + ' ' + shareUrl);
        }
    };
    
    // Instagram 공유
    document.getElementById('instagram-share').onclick = function() {
        copyToClipboard(`${shareText} ${shareUrl} #성격테스트 #MBTI #${resultName}`);
        alert('Instagram에 공유할 텍스트가 복사되었습니다!');
    };
    
    // Threads 공유
    document.getElementById('threads-share').onclick = function() {
        const threadsUrl = `https://threads.net/intent/post?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        window.open(threadsUrl, '_blank');
    };
    
    // X (Twitter) 공유
    document.getElementById('twitter-share').onclick = function() {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        window.open(twitterUrl, '_blank');
    };
}

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() {
            alert('클립보드에 복사되었습니다!');
        }, function() {
            fallbackCopyTextToClipboard(text);
        });
    } else {
        fallbackCopyTextToClipboard(text);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            alert('클립보드에 복사되었습니다!');
        } else {
            alert('복사에 실패했습니다.');
        }
    } catch (err) {
        alert('복사에 실패했습니다.');
    }
    
    document.body.removeChild(textArea);
}

function restartTest() {
    currentQuestion = 0;
    answers = [];
    selectedGender = '';
    finalResult = null;
    shuffledQuestions = [...questions];
    
    // 자동 진행 타이머 취소
    if (autoProgressTimeout) {
        clearTimeout(autoProgressTimeout);
    }
    
    document.getElementById('result-area').style.display = 'none';
    document.getElementById('gender-selection').style.display = 'block';
    document.getElementById('start-btn').disabled = true;
    document.querySelectorAll('#gender-selection .option').forEach(opt => opt.classList.remove('selected'));
}

function goHome() {
    window.location.href = 'index.html';
}

// 성별 선택 기능 추가
let selectedGender = '';
let finalResult = null;
let shuffledQuestions = [...questions];
let autoProgressTimeout;

function selectGender(gender, element) {
    document.querySelectorAll('#gender-selection .option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    selectedGender = gender;
    document.getElementById('start-btn').disabled = false;
}

function startTest() {
    shuffleQuestions(); // 질문 순서를 랜덤화
    document.getElementById('gender-selection').style.display = 'none';
    document.getElementById('test-area').style.display = 'block';
    displayQuestion();
}

function shuffleQuestions() {
    shuffledQuestions = [...questions];
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
}

function displayQuestion() {
    const questionData = shuffledQuestions[currentQuestion];
    document.getElementById('question-number').textContent = `질문 ${currentQuestion + 1}/${questions.length}`;
    document.getElementById('question-text').textContent = questionData.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    questionData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option.text;
        optionElement.onclick = () => selectOption(index, optionElement);
        optionsContainer.appendChild(optionElement);
    });
    
    updateProgress();
    updateButtonVisibility();
}

function selectOption(index, element) {
    // 기존 타이머 취소
    if (autoProgressTimeout) {
        clearTimeout(autoProgressTimeout);
    }
    
    // 모든 옵션에서 선택 상태 제거
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected', 'selecting');
    });
    
    // 선택된 옵션에 선택 효과 추가
    element.classList.add('selected');
    
    // 답변 저장
    answers[currentQuestion] = shuffledQuestions[currentQuestion].options[index].type;
    
    // 즉시 다음 질문으로 진행
    setTimeout(() => {
        nextQuestion();
    }, 200); // 매우 짧은 딜레이로 선택 효과만 보여주기
}

function updateButtonVisibility() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // 첫 번째 질문이 아니면 이전 버튼 표시
    if (prevBtn) prevBtn.style.display = currentQuestion > 0 ? 'inline-block' : 'none';
}

function previousQuestion() {
    if (currentQuestion > 0) {
        // 자동 진행 타이머 취소
        if (autoProgressTimeout) {
            clearTimeout(autoProgressTimeout);
        }
        
        currentQuestion--;
        displayQuestion();
        
        // 이전 답변이 있다면 해당 옵션을 선택된 상태로 표시
        if (answers[currentQuestion]) {
            const questionData = shuffledQuestions[currentQuestion];
            const selectedType = answers[currentQuestion];
            const selectedIndex = questionData.options.findIndex(option => option.type === selectedType);
            
            if (selectedIndex !== -1) {
                const options = document.querySelectorAll('.option');
                options[selectedIndex].classList.add('selected');
            }
        }
    }
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}