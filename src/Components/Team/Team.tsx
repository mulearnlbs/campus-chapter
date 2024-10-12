import styles from "./Team.module.css";
import line from "./assets/line.png";
import line2 from "./assets/line2.png";
import data from "../../../data.json";

const Team = () => {
    return (
        <div className={styles.teamWrapper} id="team">
            <h1>Our Team</h1>
            <div className={styles.teamBodyWrapper}>
                <div className={styles.teamBgLineWrapper}>
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                    <img src={line} alt="" loading="lazy" />
                    <img src={line2} alt="" loading="lazy" />
                </div>
                <div className={styles.teamMembersDetailsWrapper}>
                    {/** Staff Advisor */}
                    <div className={`${styles.team} ${styles.team1}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.staffAdvisor.image}
                                alt={data.team.staffAdvisor.name}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.staffAdvisor.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Staff Advisor
                            </div>
                        </div>
                    </div>

                    {/** Campus Lead */}
                    <div className={`${styles.team} ${styles.team2}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.campusLead.image}
                                alt={data.team.campusLead.name}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.campusLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Campus Lead
                            </div>
                        </div>
                    </div>

                    {/** Campus Co-Lead */}
                    <div className={`${styles.team} ${styles.team3}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.campusCoLead.image}
                                alt={data.team.campusCoLead.name}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.campusCoLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Campus Co-Lead
                            </div>
                        </div>
                    </div>

                    {/** Technical Lead */}
                    <div className={`${styles.team} ${styles.team4}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.technicalLead.image}
                                alt={data.team.technicalLead.name}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.technicalLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Technical Lead
                            </div>
                        </div>
                    </div>

                    {/** Media Lead */}
                    <div className={`${styles.team} ${styles.team5}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.mediaLead.image}
                                alt={data.team.mediaLead.name}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.mediaLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Media Lead
                            </div>
                        </div>
                    </div>

                    {/** Content Lead */}
                    <div className={`${styles.team} ${styles.team6}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.contentLead.image}
                                alt={data.team.contentLead.name}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.contentLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Content Lead
                            </div>
                        </div>
                    </div>

                    {/** Design Lead */}
                    <div className={`${styles.team} ${styles.team7}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.designLead.image}
                                alt={data.team.designLead.name}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.designLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Design Lead
                            </div>
                        </div>
                    </div>

                    {/** Media Sub-lead */}
                    <div className={`${styles.team} ${styles.team8}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.mediasubLead.image}
                                alt={data.team.mediasubLead.name}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.mediasubLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Media Sub-lead
                            </div>
                        </div>
                    </div>

                    {/** Technical Sub-lead */}
                    <div className={`${styles.team} ${styles.team9}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.technicalsubLead.image}
                                alt={data.team.technicalsubLead.name}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.technicalsubLead.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Technical Sub-lead
                            </div>
                        </div>
                    </div>

                    {/** Operation Wing */}
                    <div className={`${styles.team} ${styles.team10}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.operationwing.image}
                                alt={data.team.operationwing.name}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.operationwing.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Operation Wing
                            </div>
                        </div>
                    </div>

                    {/** Design and Content Team */}
                    <div className={`${styles.team} ${styles.team11}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.designandcontetteam.image}
                                alt={data.team.designandcontetteam.name}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.designandcontetteam.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Design and Content Team
                            </div>
                        </div>
                    </div>

                    {/** Onboarding Wing */}
                    <div className={`${styles.team} ${styles.team12}`}>
                        <div className={styles.team1Img}>
                            <img
                                className={styles.teamImageIndividual}
                                src={data.team.onboardingwing.image}
                                alt={data.team.onboardingwing.name}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.teamNameDesignation}>
                            <div className={styles.teamMemberName}>
                                {data.team.onboardingwing.name}
                            </div>
                            <div className={styles.teamMemberDesignation}>
                                Onboarding Wing
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
