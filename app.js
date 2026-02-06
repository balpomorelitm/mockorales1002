// ============ UNIT DATA ============
const units = [
    {
        id: 'u7',
        title: 'Unidad 7',
        subtitle: '¡A comer!',
        topic: 'La comida',
        desc: 'Food, meals, drinks and eating habits.',
        book: 'AULA 1',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
        conversationPoints: 'Discussing gastronomic habits, describing food and cooking methods, and talking about typical dishes in your city, Spain and Latin America.',
        prepTips: [
            'Review vocabulary for food, drinks and meals.',
            'Practice describing your eating habits and preferences.',
            'Think about typical dishes from your city and from Spanish-speaking countries.',
            'Be ready to describe cooking methods and ingredients.',
            'Visit the <a href="https://hkuhk-my.sharepoint.com/:w:/g/personal/pablot_hku_hk/IQDINc5UzBQhS4Mp4t2rC99_AWaikqT-OGpC4-9vaKgY7wM?e=uJyeHa" target="_blank">Content Summary</a> on Moodle to review key unit vocabulary and structures.'
        ],
        questions: [
            '¿Qué cosa no te gusta nada?',
            '¿Cuál es tu comida "favorita"?',
            '¿Qué desayunas y cenas normalmente?',
            '¿Qué comida sana comes poco?',
            '¿Bebes té o café? ¿Bebes alcohol? ¿Cómo los bebes?'
        ],
        questionsV2: [
            '¿Qué ingredientes lleva tu plato favorito y cómo se prepara (frito, asado, etc.)?',
            'Cuando vas a un restaurante, ¿qué sueles pedir de primero, de segundo y de postre?',
            '¿Qué es lo que más te gusta desayunar los fines de semana?',
            '¿Qué país tiene tu comida favorita?',
            '¿Prefieres la carne o el pescado? ¿Cómo te gusta que esté cocinado (a la plancha, al horno...)?'
        ]
    },
    {
        id: 'u8',
        title: 'Unidad 8',
        subtitle: 'El barrio ideal',
        topic: 'El barrio',
        desc: 'Neighbourhoods, towns, cities and places.',
        book: 'AULA 1',
        image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&q=80',
        conversationPoints: 'Describing towns, neighborhoods and cities, expressing likes and dislikes about a place, and discussing services and places in cities.',
        prepTips: [
            'Review vocabulary for describing places and neighborhoods.',
            'Practice expressing what you like and dislike about a place.',
            'Think about services and amenities in your ideal neighborhood.',
            'Be ready to compare different areas and explain your preferences.',
            'Visit the <a href="https://hkuhk-my.sharepoint.com/:w:/g/personal/pablot_hku_hk/IQDINc5UzBQhS4Mp4t2rC99_AWaikqT-OGpC4-9vaKgY7wM?e=uJyeHa" target="_blank">Content Summary</a> on Moodle to review key unit vocabulary and structures.'
        ],
        questions: [
            '¿Cómo es tu barrio? ¿Te gusta? ¿Por qué?',
            '¿Qué hay en tu barrio? ¿Qué servicios tiene?',
            '¿Cómo es tu barrio ideal? ¿Qué tiene que tener?',
            '¿Prefieres vivir en el centro de la ciudad o en las afueras? ¿Por qué?',
            '¿Qué es lo que más te gusta y lo que menos te gusta de tu ciudad?',
            '¿Conoces alguna ciudad española o latinoamericana? ¿Cómo es?'
        ],
        questionsV2: [
            'Describe tu barrio: ¿es ruidoso o tranquilo? ¿Qué servicios tiene (hospitales, tiendas...)?',
            '¿Qué es lo que más te gusta de tu ciudad y qué es lo que menos?',
            '¿Hay algún parque o zona verde cerca de tu casa? ¿Vas a menudo?',
            'Explícame cómo llegar desde aquí (o desde tu casa) a la estación de tren o metro más cercana.',
            'En tu ciudad, ¿hay mucho tráfico o pocos coches? ¿Cómo es el transporte público?',
            '¿Prefieres vivir en el centro de la ciudad o en las afueras? ¿Por qué?'
        ]
    },
    {
        id: 'u9',
        title: 'Unidad 9',
        subtitle: '¿Sabes conducir?',
        topic: 'Habilidades',
        desc: 'Skills, abilities, past experiences and professional qualities.',
        book: 'AULA 1',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80',
        conversationPoints: 'Talking about past experiences, skills, and aptitudes, and discussing character traits and professional qualities.',
        prepTips: [
            'Review vocabulary for skills and abilities (saber, poder).',
            'Practice talking about things you can and cannot do.',
            'Think about past experiences where your skills were important.',
            'Be ready to discuss character traits and qualities.',
            'Visit the <a href="https://hkuhk-my.sharepoint.com/:w:/g/personal/pablot_hku_hk/IQDINc5UzBQhS4Mp4t2rC99_AWaikqT-OGpC4-9vaKgY7wM?e=uJyeHa" target="_blank">Content Summary</a> on Moodle to review key unit vocabulary and structures.'
        ],
        questions: [
            '¿Cómo eres tú? Describe tu personalidad con algunos adjetivos.',
            '¿Qué cosas sabes hacer bien? ¿Qué no puedes hacer muy bien?',
            '¿Qué has cambiado en tu vida en los últimos años?',
            '¿Qué has hecho este año que ha sido importante para ti?',
            '¿Qué profesión te interesa? ¿Por qué? ¿Qué habilidades necesitas para ese trabajo?',
            '¿Te gustaría vivir en otro lugar o cambiar de vida? ¿Por qué?'
        ],
        questionsV2: [
            '¿Cómo te describes a ti mismo/a? (Usa tres adjetivos de carácter: tímido, sociable, etc.).',
            '¿Qué habilidad tienes? ¿Sabes tocar algún instrumento, cocinar bien o hablar otros idiomas?',
            '¿Alguna vez has viajado a un país de habla hispana? ¿Dónde has estado?',
            '¿Qué has hecho hoy antes de venir a clase (o al examen)?',
            '¿Qué cualidad valoras más en un amigo: que sea generoso, divertido o leal?',
            '¿Has probado alguna vez comida muy exótica o rara? ¿Te ha gustado?'
        ]
    },
    {
        id: 'u1b2',
        title: 'Unidad 1',
        subtitle: 'El español y tú',
        topic: 'El español y tú',
        desc: 'Your relationship with the Spanish language.',
        book: 'AULA 2',
        image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&q=80',
        conversationPoints: 'Discussing language learning habits, challenges, and feelings associated with learning a new language. Talk about how long you have done something.',
        prepTips: [
            'Review vocabulary for language learning and emotions.',
            'Practice talking about your Spanish learning journey.',
            'Think about challenges and achievements in learning Spanish.',
            'Be ready to discuss how long you have been studying and your habits.',
            'Visit the <a href="https://hkuhk-my.sharepoint.com/:w:/g/personal/pablot_hku_hk/IQDINc5UzBQhS4Mp4t2rC99_AWaikqT-OGpC4-9vaKgY7wM?e=uJyeHa" target="_blank">Content Summary</a> on Moodle to review key unit vocabulary and structures.'
        ],
        questions: [
            '¿Desde cuándo estudias español?',
            '¿Qué es lo que más te cuesta del español: la gramática, la pronunciación o el vocabulario?',
            '¿Cómo te sientes cuando tienes que hablar en público o con nativos?',
            '¿Qué recomiendas para mejorar la comprensión auditiva (escuchar)? (Usa: "Lo mejor es...", "Tienes que...").',
            '¿Desde hace cuánto tiempo vives en tu ciudad actual?',
            '¿Qué haces para practicar español fuera de clase? (ver series, leer, apps...).'
        ]
    },
    {
        id: 'u2b2',
        title: 'Unidad 2',
        subtitle: 'Una vida de película',
        topic: 'El pasado y el cine',
        desc: 'Past events, life achievements and cinema.',
        book: 'AULA 2',
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80',
        conversationPoints: 'Narrating past events, discussing life achievements, and talking about cinema.',
        prepTips: [
            'Review past tenses (pretérito indefinido, pretérito perfecto).',
            'Practice narrating events from your life.',
            'Think about movies you have seen and be ready to describe them.',
            'Be ready to discuss important moments and achievements in your life.',
            'Visit the <a href="https://hkuhk-my.sharepoint.com/:w:/g/personal/pablot_hku_hk/IQDINc5UzBQhS4Mp4t2rC99_AWaikqT-OGpC4-9vaKgY7wM?e=uJyeHa" target="_blank">Content Summary</a> on Moodle to review key unit vocabulary and structures.'
        ],
        questions: [
            '¿Quién es tu actor o actriz favorito/a? ¿En qué película o serie sale?',
            '¿Cuál es una de tus películas favoritas? ¿Por qué?',
            '¿Cuál es la última serie que has visto? ¿De qué trata?',
            'He visto… cuenta la vida de... / es la historia de... / es una película sobre...',
            '¿Prefieres ver películas o series? ¿Por qué?',
            '¿Te gustan las series largas o las series cortas?',
            '¿Cuándo fuiste al cine por última vez?'
        ],
        questionsV2: [
            '¿Cuándo naciste y dónde?',
            '¿Qué hiciste el fin de semana pasado? (menciona al menos 3 actividades).',
            '¿Cuál fue la última película que viste? ¿Te gustó el argumento?',
            '¿Quién es tu actor, actriz o director favorito? ¿Por qué?',
            'Explícame un viaje importante que hiciste en el pasado (dónde fuiste, con quién, cuánto tiempo estuviste).'
        ]
    },
    {
        id: 'u4b2',
        title: 'Unidad 4',
        subtitle: 'Hogar, dulce hogar',
        topic: 'El hogar',
        desc: 'Home design, types of housing and decoration.',
        book: 'AULA 2',
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80',
        conversationPoints: 'Expressing preferences in home design, describing types of housing, and discussing home decoration.',
        prepTips: [
            'Review vocabulary for rooms, furniture and house types.',
            'Practice describing your home and your ideal home.',
            'Think about different types of housing and your preferences.',
            'Be ready to discuss decoration styles and what you like.',
            'Visit the <a href="https://hkuhk-my.sharepoint.com/:w:/g/personal/pablot_hku_hk/IQDINc5UzBQhS4Mp4t2rC99_AWaikqT-OGpC4-9vaKgY7wM?e=uJyeHa" target="_blank">Content Summary</a> on Moodle to review key unit vocabulary and structures.'
        ],
        questions: [
            '¿Cómo es su casa ideal? ¿Es una casa, un apartamento…?',
            '¿Dónde está su casa ideal?',
            '¿Qué tamaño tiene? ¿Qué estilo prefiere?',
            '¿Qué habitaciones y espacios son esenciales en su casa ideal?',
            '¿Qué tipo de muebles y decoración tiene?',
            'Compara tu casa ideal con donde vives ahora. ¿En qué se diferencia?'
        ],
        questionsV2: [
            '¿Cómo es tu casa actual? (Tipo de vivienda, habitaciones, exterior/interior).',
            '¿De qué material son los muebles de tu salón (madera, metal, cristal...)?',
            'Compara tu casa actual con la casa de tus padres (más grande que, tan luminosa como...).',
            '¿Qué prefieres: un piso en el centro o un chalé con jardín? ¿Por qué?',
            '¿Qué electrodomésticos consideras imprescindibles en una cocina (nevera, horno, lavadora...)?',
            '¿Tu habitación es ordenada o desordenada? ¿Dónde guardas tu ropa?'
        ]
    }
];

// ============ STATE ============
let currentUnit = null;
let timerInterval = null;
let timeLeft = 120;
let mediaRecorder = null;
let audioChunks = [];
let recordingBlob = null;
let micStream = null; // Store early mic stream
const TOTAL_TIME = 120;
const CIRCUMFERENCE = 2 * Math.PI * 65; // ~408.4

// ============ AUDIO CONTEXT FOR SOUNDS ============
let audioCtx = null;

function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

// Generate a tick sound
function playTick() {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 800;
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.08);
}

// Generate a tock sound (lower pitch)
function playTock() {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 600;
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.08);
}

// Play tick-tock alternating
let tickTockToggle = false;
function playTickTock() {
    if (tickTockToggle) {
        playTock();
    } else {
        playTick();
    }
    tickTockToggle = !tickTockToggle;
}

// Phase transition chime (ascending 3-note melody)
function playTransitionChime() {
    const ctx = getAudioContext();
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
    notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = freq;
        osc.type = 'sine';
        const start = ctx.currentTime + i * 0.18;
        gain.gain.setValueAtTime(0.35, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.3);
        osc.start(start);
        osc.stop(start + 0.3);
    });
}

// End-of-session double bell
function playEndBell() {
    const ctx = getAudioContext();
    [0, 0.25].forEach(delay => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 880;
        osc.type = 'sine';
        const start = ctx.currentTime + delay;
        gain.gain.setValueAtTime(0.4, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.5);
        osc.start(start);
        osc.stop(start + 0.5);
    });
}

// ============ MICROPHONE PERMISSION ============
async function requestMicPermission() {
    const banner = document.getElementById('mic-banner');
    const btnMic = document.getElementById('btn-grant-mic');
    try {
        micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        // Permission granted — stop stream for now, will re-acquire for recording
        micStream.getTracks().forEach(t => t.stop());
        if (banner) {
            banner.classList.add('granted');
            banner.innerHTML = `
                <div class="mic-banner-icon">✅</div>
                <div class="mic-banner-text">
                    <p><strong>Microphone access granted!</strong> Your speaking phase will be recorded automatically.</p>
                </div>
            `;
        }
    } catch (err) {
        console.warn('Microphone permission denied:', err);
        if (banner) {
            banner.innerHTML = `
                <div class="mic-banner-icon">⚠️</div>
                <div class="mic-banner-text">
                    <p><strong>Microphone access denied.</strong> You can still practice, but your speaking won't be recorded. Check your browser settings to enable microphone access.</p>
                </div>
            `;
        }
    }
}

// ============ RENDER UNITS ============
function renderUnits() {
    const grid = document.getElementById('units-grid');
    grid.innerHTML = units.map((u, i) => `
        <div class="unit-card fade-in" style="animation-delay: ${i * 0.08}s" onclick="selectUnit('${u.id}')">
            <div class="unit-card-img-wrapper">
                <img class="unit-card-img" src="${u.image}" alt="${u.topic}" loading="lazy">
                <div class="unit-card-badge">${u.book}</div>
            </div>
            <div class="unit-card-body">
                <div class="unit-card-title">${u.title} — ${u.subtitle}</div>
                <div class="unit-card-desc">${u.desc}</div>
            </div>
            <div class="unit-card-footer">
                <span>
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="7" cy="7" r="6"/><path d="M7 4v3l2 1"/></svg>
                    4 min total
                </span>
                <span class="start-label">Start Practice →</span>
            </div>
        </div>
    `).join('');
}

// ============ NAVIGATION ============
function selectUnit(id) {
    currentUnit = units.find(u => u.id === id);
    if (!currentUnit) return;
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('practice-screen').style.display = 'block';
    document.getElementById('practice-title').textContent = `${currentUnit.title} — ${currentUnit.subtitle}`;
    document.getElementById('practice-topic').textContent = currentUnit.desc;

    // Render unit info box
    const infoBox = document.getElementById('unit-info-box');
    infoBox.innerHTML = `
        <h3>📖 About This Unit</h3>
        <div class="info-section">
            <h4>💬 Topics for Conversation</h4>
            <p>${currentUnit.conversationPoints}</p>
        </div>
        <div class="info-section">
            <h4>💡 Preparation Tips</h4>
            <ul>
                ${currentUnit.prepTips.map(t => `<li>${t}</li>`).join('')}
            </ul>
        </div>
    `;

    // Show mic permission banner
    const banner = document.getElementById('mic-banner');
    banner.style.display = 'flex';
    banner.classList.remove('granted');
    banner.innerHTML = `
        <div class="mic-banner-icon">🎙️</div>
        <div class="mic-banner-text">
            <p><strong>Microphone needed for recording.</strong> During the Speaking phase, your voice will be recorded so you can listen back afterwards. Please grant microphone access now to avoid interruptions later.</p>
        </div>
        <button class="btn-mic" id="btn-grant-mic" onclick="requestMicPermission()">Allow Microphone</button>
    `;

    // Check if mic already granted
    if (navigator.permissions && navigator.permissions.query) {
        navigator.permissions.query({ name: 'microphone' }).then(result => {
            if (result.state === 'granted') {
                banner.classList.add('granted');
                banner.innerHTML = `
                    <div class="mic-banner-icon">✅</div>
                    <div class="mic-banner-text">
                        <p><strong>Microphone access granted!</strong> Your speaking phase will be recorded automatically.</p>
                    </div>
                `;
            }
        }).catch(() => {});
    }

    // Show/hide version 2 button
    const btnV2 = document.getElementById('btn-start-v2');
    if (btnV2) {
        btnV2.style.display = currentUnit.questionsV2 ? 'inline-flex' : 'none';
    }

    resetUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome() {
    stopTimer();
    stopRecording();
    document.getElementById('practice-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============ RESET ============
function resetUI() {
    // Reset phase indicators
    ['step-prep', 'step-speak', 'step-review'].forEach(id => {
        document.getElementById(id).className = 'phase-step';
    });
    ['conn-1', 'conn-2'].forEach(id => {
        document.getElementById(id).className = 'phase-connector';
    });

    // Show start and unit info, hide everything else
    document.getElementById('start-area').style.display = 'block';
    document.getElementById('unit-info-box').style.display = 'block';
    document.getElementById('timer-container').style.display = 'none';
    document.getElementById('questions-box').style.display = 'none';
    document.getElementById('questions-box').classList.remove('small-mode');
    document.getElementById('notes-box').style.display = 'none';
    document.getElementById('notes-box').classList.remove('readonly');
    document.getElementById('notes-area').value = '';
    document.getElementById('notes-area').removeAttribute('readonly');
    document.getElementById('recording-box').style.display = 'none';
    document.getElementById('recording-box').innerHTML = `
        <h3>🎙️ Recording</h3>
        <div class="rec-indicator">
            <div class="rec-dot"></div>
            <span>Recording in progress…</span>
        </div>
    `;
    document.getElementById('start-speaking-area').style.display = 'none';
    document.getElementById('playback-box').style.display = 'none';
    document.getElementById('rubric-box').style.display = 'none';
    document.getElementById('restart-area').style.display = 'none';

    // Reset timer visual
    document.getElementById('timer-progress').style.strokeDashoffset = '0';
    document.getElementById('timer-progress').className = 'timer-ring-progress';

    // Reset tick-tock toggle
    tickTockToggle = false;
}

function resetPractice() {
    stopTimer();
    stopRecording();
    resetUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============ PREPARATION PHASE ============
function startPreparation(version) {
    document.getElementById('start-area').style.display = 'none';
    document.getElementById('step-prep').classList.add('active');

    // Hide mic banner and unit info during practice
    document.getElementById('mic-banner').style.display = 'none';
    document.getElementById('unit-info-box').style.display = 'none';

    // Pick question set based on version
    const questions = (version === 2 && currentUnit.questionsV2) ? currentUnit.questionsV2 : currentUnit.questions;

    // Show questions
    const qBox = document.getElementById('questions-box');
    const qList = document.getElementById('questions-list');
    qList.innerHTML = questions.map((q, i) => `
        <div class="question-item">
            <div class="question-num">${i + 1}</div>
            <div>${q}</div>
        </div>
    `).join('');
    qBox.style.display = 'block';
    qBox.classList.add('fade-in');

    // Show notes
    const nBox = document.getElementById('notes-box');
    nBox.style.display = 'block';
    nBox.classList.add('fade-in');

    // Show timer
    document.getElementById('timer-container').style.display = 'block';
    document.getElementById('timer-label').textContent = '⏳ PREPARATION TIME';
    document.getElementById('timer-label').className = 'timer-label';
    document.getElementById('timer-progress').className = 'timer-ring-progress';
    startTimer(TOTAL_TIME, onPreparationEnd);
}

// ============ SPEAKING PHASE ============
function onPreparationEnd() {
    // Play transition chime
    playTransitionChime();

    // Update phase indicators
    document.getElementById('step-prep').classList.remove('active');
    document.getElementById('step-prep').classList.add('completed');
    document.getElementById('conn-1').classList.add('active');

    // Hide timer
    document.getElementById('timer-container').style.display = 'none';

    // Make notes readonly
    document.getElementById('notes-box').classList.add('readonly');
    document.getElementById('notes-area').setAttribute('readonly', true);

    // Show the "Start Speaking" button
    const speakBtn = document.getElementById('start-speaking-area');
    speakBtn.style.display = 'block';
    speakBtn.classList.add('fade-in');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startSpeaking() {
    // Hide the start speaking button
    document.getElementById('start-speaking-area').style.display = 'none';

    // Activate speaking phase indicator
    document.getElementById('step-speak').classList.add('active');

    // Shrink questions
    document.getElementById('questions-box').classList.add('small-mode');

    // Show timer and update label
    document.getElementById('timer-container').style.display = 'block';
    document.getElementById('timer-label').textContent = '🎤 SPEAKING TIME';
    document.getElementById('timer-label').className = 'timer-label speaking-label';
    document.getElementById('timer-progress').className = 'timer-ring-progress speaking';

    // Show recording
    document.getElementById('recording-box').style.display = 'block';
    document.getElementById('recording-box').classList.add('fade-in');

    // Start recording
    startRecording();

    // Start speaking timer
    startTimer(TOTAL_TIME, onSpeakingEnd);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============ REVIEW PHASE ============
function onSpeakingEnd() {
    // Play end bell
    playEndBell();

    // Update phase indicators
    document.getElementById('step-speak').classList.remove('active');
    document.getElementById('step-speak').classList.add('completed');
    document.getElementById('conn-2').classList.add('active');
    document.getElementById('step-review').classList.add('active');

    // Hide timer and recording indicator
    document.getElementById('timer-container').style.display = 'none';
    document.getElementById('recording-box').style.display = 'none';

    // Stop recording
    stopRecording();

    // Show playback (after a tiny delay for the blob to finalize)
    setTimeout(() => {
        if (recordingBlob) {
            const url = URL.createObjectURL(recordingBlob);
            document.getElementById('audio-player').src = url;
            document.getElementById('playback-box').style.display = 'block';
            document.getElementById('playback-box').classList.add('fade-in');
        }
    }, 500);

    // Show rubric
    document.getElementById('rubric-box').style.display = 'block';
    document.getElementById('rubric-box').classList.add('fade-in');

    // Show restart
    document.getElementById('restart-area').style.display = 'block';

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============ TIMER ============
function startTimer(seconds, onEnd) {
    stopTimer();
    timeLeft = seconds;
    tickTockToggle = false;
    updateTimerDisplay();
    const progress = document.getElementById('timer-progress');
    progress.style.strokeDasharray = CIRCUMFERENCE;
    progress.style.strokeDashoffset = '0';

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        // Update ring
        const fraction = 1 - (timeLeft / seconds);
        progress.style.strokeDashoffset = (fraction * CIRCUMFERENCE).toFixed(1);

        // Tick-tock for last 15 seconds
        if (timeLeft <= 15 && timeLeft > 0) {
            playTickTock();
        }

        // Color warnings
        if (timeLeft <= 10) {
            if (!progress.classList.contains('danger')) {
                progress.classList.remove('warning');
                progress.classList.add('danger');
            }
        } else if (timeLeft <= 30) {
            if (!progress.classList.contains('warning')) {
                progress.classList.add('warning');
            }
        }

        if (timeLeft <= 0) {
            stopTimer();
            if (onEnd) onEnd();
        }
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerDisplay() {
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;
    document.getElementById('timer-text').textContent = `${min}:${sec.toString().padStart(2, '0')}`;
}

// ============ RECORDING ============
async function startRecording() {
    audioChunks = [];
    recordingBlob = null;
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = e => {
            if (e.data.size > 0) audioChunks.push(e.data);
        };
        mediaRecorder.onstop = () => {
            recordingBlob = new Blob(audioChunks, { type: 'audio/webm' });
            // Stop all tracks
            stream.getTracks().forEach(t => t.stop());
        };
        mediaRecorder.start();
    } catch (err) {
        console.warn('Microphone access denied or not available:', err);
        document.getElementById('recording-box').innerHTML = `
            <h3>🎙️ Recording</h3>
            <p style="color:var(--primary); font-size:0.9rem;">⚠️ Microphone access was denied. You can still practice without recording.</p>
        `;
    }
}

function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
    }
}

function downloadRecording() {
    if (!recordingBlob) return;
    const url = URL.createObjectURL(recordingBlob);
    const a = document.createElement('a');
    a.href = url;
    const timestamp = new Date().toISOString().slice(0, 16).replace('T', '_').replace(':', '-');
    a.download = `oral_practice_${currentUnit.id}_${timestamp}.webm`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// ============ INIT ============
renderUnits();
