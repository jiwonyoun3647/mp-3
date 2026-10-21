
export default function Experience() {
    return(
        <>
            <title>Experience | Youn's Resume</title>
            <h3><strong>Work Experience</strong></h3>
            <p>
                <strong><u>HYPERDYNE Inc.</u></strong>
                <br/><strong>Software Engineering Intern</strong>
            </p>
            <ul>
                <li>Designed and deployed a company web platform integrating a scheduler, automated meeting
                    documentation, and approval
                    workflows as plug-in modules backed by a shared SQLite database, allowing data to flow across the
                    modules.
                </li>
                <li>Established a meeting documentation pipeline that processes raw audio files using WhisperX for
                    transcription and speaker
                    diarization with voiceprint matching, utilizing an LLM to structure minutes in JSON and to extract
                    action items for task tracking,
                    and Python to render formatted DOCX meeting minutes.
                </li>
                <li>Orchestrated a multistep electronic approval workflow from vendor quotations to ERP purchase order
                    registration by integrating
                    third-party APIs (DaouOffice Groupware and Ecount ERP) with AI-powered data extraction and a
                    Cloudflare Workers webhook
                    receiver for the intranet server.
                </li>
            </ul>

            <p>
                <strong><u>MARU ENGLISH ACADEMY</u></strong>
            </p>
            <ul>
                <li>Taught fundamental English grammar, reading and speaking lessons to elementary school students.</li>
                <li>Conducted parent consultations regarding student progress, learning needs, and study strategies.
                </li>
            </ul>
        </>
    )
}
