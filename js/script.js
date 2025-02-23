const questions = [
    { 
        name: 'مائده', 
        time: 60, 
        score: 0, 
        coins: 0, 
        questions: [
            { question: '58 * 32', answer: 1856 },
            { question: '120 ÷ 15', answer: 8 },
            { question: '987 + 123', answer: 1110 },
            { question: '765 - 432', answer: 333 },
            { question: '62 * 21', answer: 1302 },
            { question: '980 ÷ 35', answer: 28 },
            { question: '48 * 19', answer: 912 },
            { question: '149 + 85', answer: 234 },
            { question: '350 ÷ 7', answer: 50 },
            { question: '987 - 650', answer: 337 },
            { question: '100 * 45', answer: 4500 },
            { question: '654 + 287', answer: 941 },
            { question: '175 ÷ 25', answer: 7 },
            { question: '120 + 95', answer: 215 },
            { question: '560 ÷ 7', answer: 80 },
            { question: '500 + 432', answer: 932 },
            { question: '200 * 3', answer: 600 },
            { question: '250 ÷ 5', answer: 50 },
            { question: '612 - 234', answer: 378 },
            { question: '122 + 188', answer: 310 }
        ]
    },
    { 
        name: 'امیر علی', 
        time: 60, 
        score: 0, 
        coins: 0, 
        questions: [
            { question: '75 * 48', answer: 3600 },
            { question: '960 ÷ 24', answer: 40 },
            { question: '653 + 348', answer: 1001 },
            { question: '1200 - 700', answer: 500 },
            { question: '84 * 26', answer: 2184 },
            { question: '1150 ÷ 50', answer: 23 },
            { question: '68 * 34', answer: 2312 },
            { question: '500 ÷ 5', answer: 100 },
            { question: '672 + 150', answer: 822 },
            { question: '800 ÷ 16', answer: 50 },
            { question: '700 + 150', answer: 850 },
            { question: '52 * 18', answer: 936 },
            { question: '300 ÷ 3', answer: 100 },
            { question: '56 * 25', answer: 1400 },
            { question: '65 + 45', answer: 110 },
            { question: '25 * 44', answer: 1100 },
            { question: '650 ÷ 13', answer: 50 },
            { question: '1500 + 300', answer: 1800 },
            { question: '250 ÷ 5', answer: 50 },
            { question: '900 - 300', answer: 600 }
        ]
    },
    { 
        name: 'طاها', 
        time: 60, 
        score: 0, 
        coins: 0, 
        questions: [
            { question: '18 * 9', answer: 162 },
            { question: '120 ÷ 8', answer: 15 },
            { question: '54 + 37', answer: 91 },
            { question: '75 - 28', answer: 47 },
            { question: '30 * 4', answer: 120 },
            { question: '100 ÷ 4', answer: 25 },
            { question: '45 + 32', answer: 77 },
            { question: '80 ÷ 8', answer: 10 },
            { question: '60 + 20', answer: 80 },
            { question: '48 ÷ 6', answer: 8 },
            { question: '65 + 35', answer: 100 },
            { question: '40 * 2', answer: 80 },
            { question: '72 ÷ 9', answer: 8 },
            { question: '84 - 46', answer: 38 },
            { question: '60 ÷ 12', answer: 5 },
            { question: '25 * 4', answer: 100 },
            { question: '100 - 30', answer: 70 },
            { question: '150 ÷ 30', answer: 5 },
            { question: '99 - 56', answer: 43 },
            { question: '80 ÷ 8', answer: 10 }
        ]
    },
    { 
        name: 'حلما', 
        time: 180, 
        score: 0, 
        coins: 0, 
        questions: [
            { question: '2 + 3', answer: 5 },
            { question: '7 - 4', answer: 3 },
            { question: '5 + 6', answer: 11 },
            { question: '4 + 8', answer: 12 },
            { question: '3 + 2', answer: 5 },
            { question: '9 - 5', answer: 4 },
            { question: '6 + 7', answer: 13 },
            { question: '8 - 3', answer: 5 },
            { question: '7 + 9', answer: 16 },
            { question: '2 + 6', answer: 8 },
            { question: '10 - 2', answer: 8 },
            { question: '15 + 10', answer: 25 },
            { question: '6 + 4', answer: 10 },
            { question: '13 - 8', answer: 5 },
            { question: '18 - 9', answer: 9 },
            { question: '12 - 5', answer: 7 },
            { question: '20 - 7', answer: 13 },
            { question: '16 + 5', answer: 21 },
            { question: '9 + 8', answer: 17 },
            { question: '25 - 5', answer: 20 }
        ]
    }
];

let currentQuestionIndex = 0;
let currentKidIndex = 0;
let currentQuestion;
let countdown;
let remainingTime;

// شروع بازی
function startGame() {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("gameStatus").style.display = "block";
    loadNextQuestion();
}

// بارگذاری سوال بعدی
function loadNextQuestion() {
    if (currentKidIndex < questions.length) {
        const kid = questions[currentKidIndex];
        currentQuestion = kid.questions[currentQuestionIndex];
    
        // نمایش اسم و سوال
        const currentKidElement = document.getElementById("currentKid");
        currentKidElement.innerHTML = `<p>${kid.name}</p><p>${currentQuestion.question} = ?</p>`;
    
        // مخفی کردن فیدبک و پاک کردن ورودی
        document.getElementById("feedback").style.display = "none";
        document.getElementById("answer").style.display = "inline-block";
        document.getElementById("checkButton").style.display = "inline-block";
        document.getElementById("answer").value = '';
    
        // نمایش دکمه‌ها فقط در صورت نیاز
        updateHintAndAnswerButtons();

        // شروع تایمر
        startTimer(kid.time);
    } else {
        document.getElementById("currentKid").innerHTML = "<h3>تمام شد! عالی کار کردید!</h3>";
        document.getElementById("gameStatus").style.display = "none";
        document.getElementById("answer").style.display = "none";
        document.getElementById("checkButton").style.display = "none";
    
        // نمایش دکمه شروع برای نفر بعدی
        document.getElementById("startButton").style.display = "inline-block";
    }
}

// به روز رسانی وضعیت دکمه‌ها
function updateHintAndAnswerButtons() {
    const kid = questions[currentKidIndex];

    // برای راهنمایی
    if (kid.coins >= 10) {
        document.getElementById("hintButton").style.pointerEvents = "auto";
        document.getElementById("hintButton").style.opacity = 1;
    } else {
        document.getElementById("hintButton").style.pointerEvents = "none";
        document.getElementById("hintButton").style.opacity = 0.5;
    }

    // برای جواب کامل
    if (kid.coins >= 20) {
        document.getElementById("fullAnswerButton").style.pointerEvents = "auto";
        document.getElementById("fullAnswerButton").style.opacity = 1;
    } else {
        document.getElementById("fullAnswerButton").style.pointerEvents = "none";
        document.getElementById("fullAnswerButton").style.opacity = 0.5;
    }
}

// راهنمایی: نمایش بخشی از جواب
document.getElementById("hintButton").onclick = function() {
    const kid = questions[currentKidIndex];
    if (kid.coins >= 10) {
        kid.coins -= 10;
        updateScoreBoard();

        // نمایش بخشی از جواب در کادر ورودی
        const partialAnswer = currentQuestion.answer.toString().slice(0, 1);  // فقط عدد اول
        document.getElementById("answer").value = partialAnswer;
        document.getElementById("feedback").textContent = "راهنمایی: عدد اول جواب";
    }
};

// جواب کامل: نمایش جواب کامل
document.getElementById("fullAnswerButton").onclick = function() {
    const kid = questions[currentKidIndex];
    if (kid.coins >= 20) {
        kid.coins -= 20;
        updateScoreBoard();

        // نمایش جواب کامل در کادر ورودی
        document.getElementById("answer").value = currentQuestion.answer;
        document.getElementById("feedback").textContent = `جواب کامل: ${currentQuestion.answer}`;
    }
};

// تابع برای چک کردن جواب
function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    const feedbackElement = document.getElementById("feedback");

    if (userAnswer === currentQuestion.answer) {
        feedbackElement.textContent = "جواب درست بود!";
        // اضافه کردن سکه و امتیاز برای جواب درست
        questions[currentKidIndex].coins += 10;
        questions[currentKidIndex].score += 10;
        updateScoreBoard();
    } else {
        feedbackElement.textContent = "جواب اشتباه بود!";
        // کسر امتیاز برای جواب اشتباه
        questions[currentKidIndex].score = Math.max(0, questions[currentKidIndex].score - 1);
        updateScoreBoard();
    }

    feedbackElement.style.display = "block";

    // رفتن به سوال بعدی بدون در نظر گرفتن جواب اشتباه
    setTimeout(function() {
        // رفتن به سوال بعدی
        currentQuestionIndex++;

        if (currentQuestionIndex >= questions[currentKidIndex].questions.length) {
            currentKidIndex++;
            currentQuestionIndex = 0;
        }

        // اگر سوالات همه کودک‌ها تمام شده، بازی تمام می‌شود
        if (currentKidIndex < questions.length) {
            loadNextQuestion(); // بارگذاری سوال بعدی
        } else {
            document.getElementById("currentKid").innerHTML = "<h3>تمام شد! عالی کار کردید!</h3>";
            document.getElementById("gameStatus").style.display = "none";
            document.getElementById("answer").style.display = "none";
            document.getElementById("checkButton").style.display = "none";
            
            // نمایش دکمه شروع بعد از تمام شدن همه سوالات
            document.getElementById("startButton").style.display = "inline-block";
        }
    }, 1000); // 1 ثانیه بعد از فیدبک
}

// به روز رسانی امتیازات
function updateScoreBoard() {
    const currentKid = questions[currentKidIndex].name.toLowerCase();
    const currentKidName = currentKid === 'مائده' ? 'maede' :
                            currentKid === 'امیر علی' ? 'amir' :
                            currentKid === 'طاها' ? 'taha' :
                            'helma';

    document.getElementById(`coins-${currentKidName}`).textContent = questions[currentKidIndex].coins;
    document.getElementById(`score-${currentKidName}`).textContent = questions[currentKidIndex].score;
}

// شروع تایمر
function startTimer(timeLimit) {
    // اگر تایمر قبلی وجود داشته باشد، آن را متوقف کنیم
    if (countdown) {
        clearInterval(countdown);
    }

    remainingTime = timeLimit; // تنظیم زمان باقی‌مانده
    document.getElementById("timer").textContent = `زمان باقی‌مانده: ${remainingTime} ثانیه`; // نمایش زمان باقی‌مانده

    countdown = setInterval(function() {
        remainingTime--; // کاهش زمان باقی‌مانده

        // نمایش زمان باقی‌مانده در صفحه
        document.getElementById("timer").textContent = `زمان باقی‌مانده: ${remainingTime} ثانیه`;

        // اگر زمان تمام شد، تایمر را متوقف کرده و به سوال بعدی برویم
        if (remainingTime <= 0) {
            clearInterval(countdown); // متوقف کردن تایمر
            document.getElementById("feedback").textContent = "زمان تمام شد!";
            
            // رفتن به سوال بعدی
            setTimeout(function() {
                currentQuestionIndex++;
                if (currentQuestionIndex >= questions[currentKidIndex].questions.length) {
                    currentKidIndex++;
                    currentQuestionIndex = 0;
                }

                // اگر سوالات همه کودک‌ها تمام شده، بازی تمام می‌شود
                if (currentKidIndex < questions.length) {
                    loadNextQuestion(); // بارگذاری سوال بعدی
                } else {
                    document.getElementById("currentKid").innerHTML = "<h3>تمام شد! عالی کار کردید!</h3>";
                    document.getElementById("gameStatus").style.display = "none";
                    document.getElementById("answer").style.display = "none";
                    document.getElementById("checkButton").style.display = "none";
                    
                    // نمایش دکمه شروع بعد از تمام شدن همه سوالات
                    document.getElementById("startButton").style.display = "inline-block";
                }
            }, 1000); // 1 ثانیه بعد از فیدبک
        }
    }, 1000); // هر 1 ثانیه یک بار کاهش زمان
}


let mediaRecorder;
let audioChunks = [];
let audioUrl;
let audioBlob;
let isRecording = false;  // برای بررسی اینکه آیا ضبط در حال انجام است یا نه

// شروع بازی و ضبط صدا
function startGame() {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("gameStatus").style.display = "block";
    startRecording();  // شروع ضبط صدا
    loadNextQuestion();
}

// شروع ضبط صدا
function startRecording() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.ondataavailable = event => {
                    audioChunks.push(event.data);
                };

                mediaRecorder.onstop = () => {
                    audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                    audioUrl = URL.createObjectURL(audioBlob);
                    document.getElementById("saveAudioButton").style.display = "inline-block"; // نمایش دکمه ذخیره صدا
                };

                mediaRecorder.start();
                isRecording = true; // نشان می‌دهیم که ضبط در حال انجام است
            })
            .catch(error => {
                console.error("خطا در دسترسی به میکروفن: ", error);
            });
    } else {
        alert("این مرورگر از ضبط صدا پشتیبانی نمی‌کند.");
    }
}

// متوقف کردن ضبط صدا و ذخیره آن
function stopRecording() {
    if (isRecording) {
        mediaRecorder.stop();
        isRecording = false; // نشان می‌دهیم که ضبط متوقف شده است
    }
}

// ذخیره‌سازی فایل صدا
function saveAudio() {
    const link = document.createElement('a');
    link.href = audioUrl;
    link.download = 'recorded_audio.wav';
    link.click();
}

// متوقف کردن بازی و ضبط صدا
function stopGame() {
    stopRecording();  // توقف ضبط صدا
    document.getElementById("saveAudioButton").style.display = "none"; // مخفی کردن دکمه ذخیره صدا
    document.getElementById("gameStatus").style.display = "none";
    document.getElementById("answer").style.display = "none";
    document.getElementById("checkButton").style.display = "none";
    document.getElementById("startButton").style.display = "inline-block";
}

// بارگذاری سوال بعدی
function loadNextQuestion() {
    if (currentKidIndex < questions.length) {
        const kid = questions[currentKidIndex];
        currentQuestion = kid.questions[currentQuestionIndex];
    
        // نمایش اسم و سوال
        const currentKidElement = document.getElementById("currentKid");
        currentKidElement.innerHTML = `<p>${kid.name}</p><p>${currentQuestion.question} = ?</p>`;
    
        // مخفی کردن فیدبک و پاک کردن ورودی
        document.getElementById("feedback").style.display = "none";
        document.getElementById("answer").style.display = "inline-block";
        document.getElementById("checkButton").style.display = "inline-block";
        document.getElementById("answer").value = '';
    
        // نمایش دکمه‌ها فقط در صورت نیاز
        updateHintAndAnswerButtons();

        // شروع تایمر
        startTimer(kid.time);
    } else {
        document.getElementById("currentKid").innerHTML = "<h3>تمام شد! عالی کار کردید!</h3>";
        stopRecording(); // متوقف کردن ضبط صدا وقتی که تمام شد!
        document.getElementById("gameStatus").style.display = "none";
        document.getElementById("answer").style.display = "none";
        document.getElementById("checkButton").style.display = "none";
    
        // نمایش دکمه شروع برای نفر بعدی
        document.getElementById("startButton").style.display = "inline-block";
    }
}
