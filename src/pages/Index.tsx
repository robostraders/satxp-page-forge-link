
const Index = () => {
  return (
    <div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

          * {
            -webkit-font-smoothing: antialiased;
            box-sizing: border-box;
          }

          body {
            margin: 0;
            background-color: rgb(255, 255, 255);
          }

          .framer-1wklw7r {
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
            justify-content: flex-start;
            transform: none;
          }

          .framer-182r17l {
            align-content: center;
            align-items: center;
            background: linear-gradient(
              180deg,
              rgb(255, 217, 93) 14.062500000000028%,
              rgb(227, 174, 4) 68.74999999999999%
            );
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
            gap: 80px;
            height: min-content;
            justify-content: center;
            overflow: hidden;
            padding: 80px 20px;
            position: relative;
            width: 100%;
          }

          .framer-1qyxjbz {
            align-content: center;
            align-items: center;
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
            gap: 40px;
            height: min-content;
            justify-content: center;
            max-width: 800px;
            padding: 0px;
            position: relative;
            width: 100%;
          }

          .framer-xjqb6z {
            flex-shrink: 0;
            height: auto;
            position: relative;
            white-space: pre-wrap;
            width: 100%;
            word-break: break-word;
            word-wrap: break-word;
          }

          .framer-styles-preset-1b5uiip {
            --framer-font-family: "Inter", "Inter Placeholder", sans-serif;
            --framer-font-size: 64px;
            --framer-font-weight: 800;
            --framer-letter-spacing: -0.02em;
            --framer-line-height: 1.2em;
            --framer-text-alignment: center;
            --framer-text-color: var(--token-570a4267-d2d7-4b3b-b047-ddb04643cdc5, rgb(255, 255, 255));
          }

          .framer-17mqg1c {
            flex-shrink: 0;
            height: auto;
            position: relative;
            white-space: pre-wrap;
            width: 100%;
            word-break: break-word;
            word-wrap: break-word;
          }

          .framer-styles-preset-1g8dbr7 {
            --framer-font-family: "Inter", "Inter Placeholder", sans-serif;
            --framer-font-size: 18px;
            --framer-font-weight: 500;
            --framer-letter-spacing: -0.01em;
            --framer-line-height: 1.6em;
            --framer-text-alignment: center;
            --framer-text-color: var(--token-570a4267-d2d7-4b3b-b047-ddb04643cdc5, rgb(255, 255, 255));
          }

          .framer-q8v6ya {
            align-content: center;
            align-items: center;
            background-color: var(--token-570a4267-d2d7-4b3b-b047-ddb04643cdc5, rgb(255, 255, 255));
            border-radius: 200px;
            cursor: pointer;
            display: flex;
            flex-direction: row;
            flex-shrink: 0;
            gap: 12px;
            height: min-content;
            justify-content: center;
            overflow: hidden;
            padding: 16px 32px;
            position: relative;
            text-decoration: none;
            width: min-content;
          }

          .framer-3p9w3h {
            flex-shrink: 0;
            height: auto;
            position: relative;
            white-space: pre;
            width: auto;
          }

          .framer-styles-preset-1ued2lz {
            --framer-font-family: "Inter", "Inter Placeholder", sans-serif;
            --framer-font-size: 16px;
            --framer-font-weight: 600;
            --framer-letter-spacing: -0.01em;
            --framer-line-height: 1.3em;
            --framer-text-alignment: left;
            --framer-text-color: var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(0, 0, 0));
          }

          .framer-b7o1kz {
            aspect-ratio: 1 / 1;
            flex-shrink: 0;
            height: var(--framer-aspect-ratio-supported, 18px);
            position: relative;
            width: 18px;
          }

          .framer-1b7hbp5 {
            align-content: center;
            align-items: center;
            background-color: var(--token-570a4267-d2d7-4b3b-b047-ddb04643cdc5, rgb(255, 255, 255));
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
            gap: 80px;
            height: min-content;
            justify-content: center;
            overflow: hidden;
            padding: 80px 20px;
            position: relative;
            width: 100%;
          }

          .framer-12d8ks5 {
            align-content: center;
            align-items: center;
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
            gap: 60px;
            height: min-content;
            justify-content: center;
            max-width: 1200px;
            padding: 0px;
            position: relative;
            width: 100%;
          }

          .framer-1f7k1m8 {
            align-content: center;
            align-items: center;
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
            gap: 24px;
            height: min-content;
            justify-content: center;
            max-width: 800px;
            padding: 0px;
            position: relative;
            width: 100%;
          }

          .framer-1kl0q5d {
            flex-shrink: 0;
            height: auto;
            position: relative;
            white-space: pre-wrap;
            width: 100%;
            word-break: break-word;
            word-wrap: break-word;
          }

          .framer-styles-preset-1n9yfcx {
            --framer-font-family: "Inter", "Inter Placeholder", sans-serif;
            --framer-font-size: 48px;
            --framer-font-weight: 800;
            --framer-letter-spacing: -0.02em;
            --framer-line-height: 1.2em;
            --framer-text-alignment: center;
            --framer-text-color: var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(0, 0, 0));
          }

          .framer-ql8irr {
            flex-shrink: 0;
            height: auto;
            position: relative;
            white-space: pre-wrap;
            width: 100%;
            word-break: break-word;
            word-wrap: break-word;
          }

          .framer-styles-preset-11w6dks {
            --framer-font-family: "Inter", "Inter Placeholder", sans-serif;
            --framer-font-size: 18px;
            --framer-font-weight: 500;
            --framer-letter-spacing: -0.01em;
            --framer-line-height: 1.6em;
            --framer-text-alignment: center;
            --framer-text-color: var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(0, 0, 0));
          }

          .framer-8fhznj {
            align-content: center;
            align-items: stretch;
            display: flex;
            flex-direction: row;
            flex-shrink: 0;
            gap: 40px;
            height: min-content;
            justify-content: center;
            padding: 0px;
            position: relative;
            width: 100%;
          }

          .framer-1idm8ow, .framer-nwhk6n, .framer-nq7wg7 {
            align-content: center;
            align-items: center;
            border-radius: 20px;
            box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 0.08);
            display: flex;
            flex: 1 0 0px;
            flex-direction: column;
            gap: 24px;
            height: min-content;
            justify-content: center;
            overflow: hidden;
            padding: 40px 32px;
            position: relative;
            width: 1px;
          }

          .framer-1idm8ow {
            background: linear-gradient(
              135deg,
              rgb(255, 217, 93) 0%,
              rgb(251, 193, 5) 100%
            );
          }

          .framer-nwhk6n {
            background-color: var(--token-570a4267-d2d7-4b3b-b047-ddb04643cdc5, rgb(255, 255, 255));
          }

          .framer-nq7wg7 {
            background-color: var(--token-570a4267-d2d7-4b3b-b047-ddb04643cdc5, rgb(255, 255, 255));
          }

          .framer-1kkq5jr, .framer-1kqohbt, .framer-a6vmne {
            aspect-ratio: 1 / 1;
            flex-shrink: 0;
            height: var(--framer-aspect-ratio-supported, 64px);
            position: relative;
            width: 64px;
          }

          .framer-1v7jh1g, .framer-1l6j5ng, .framer-g3ej7l {
            flex-shrink: 0;
            height: auto;
            position: relative;
            white-space: pre-wrap;
            width: 100%;
            word-break: break-word;
            word-wrap: break-word;
          }

          .framer-styles-preset-vafkoo {
            --framer-font-family: "Inter", "Inter Placeholder", sans-serif;
            --framer-font-size: 24px;
            --framer-font-weight: 700;
            --framer-letter-spacing: -0.01em;
            --framer-line-height: 1.3em;
            --framer-text-alignment: center;
            --framer-text-color: var(--token-570a4267-d2d7-4b3b-b047-ddb04643cdc5, rgb(255, 255, 255));
          }

          .framer-styles-preset-1i97mjo {
            --framer-font-family: "Inter", "Inter Placeholder", sans-serif;
            --framer-font-size: 24px;
            --framer-font-weight: 700;
            --framer-letter-spacing: -0.01em;
            --framer-line-height: 1.3em;
            --framer-text-alignment: center;
            --framer-text-color: var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(0, 0, 0));
          }

          .framer-vqmrnj, .framer-1q3wjlc, .framer-1l0fqvo {
            flex-shrink: 0;
            height: auto;
            position: relative;
            white-space: pre-wrap;
            width: 100%;
            word-break: break-word;
            word-wrap: break-word;
          }

          .framer-styles-preset-1kicqzq {
            --framer-font-family: "Inter", "Inter Placeholder", sans-serif;
            --framer-font-size: 16px;
            --framer-font-weight: 500;
            --framer-letter-spacing: -0.01em;
            --framer-line-height: 1.6em;
            --framer-text-alignment: center;
            --framer-text-color: var(--token-570a4267-d2d7-4b3b-b047-ddb04643cdc5, rgb(255, 255, 255));
          }

          .framer-styles-preset-1lmh3ue {
            --framer-font-family: "Inter", "Inter Placeholder", sans-serif;
            --framer-font-size: 16px;
            --framer-font-weight: 500;
            --framer-letter-spacing: -0.01em;
            --framer-line-height: 1.6em;
            --framer-text-alignment: center;
            --framer-text-color: var(--token-a9e6e11e-d757-45c2-b481-af288c29b3ca, rgb(0, 0, 0));
          }

          .framer-1xh6vvj {
            background: linear-gradient(
              180deg,
              rgb(255, 217, 93) 14.062500000000028%,
              rgb(227, 174, 4) 68.74999999999999%
            );
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
            gap: 80px;
            height: min-content;
            justify-content: flex-start;
            overflow: hidden;
            padding: 80px 20px;
            position: relative;
            width: 100%;
          }

          .framer-1agqe2z {
            align-content: center;
            align-items: center;
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
            gap: 40px;
            height: min-content;
            justify-content: center;
            max-width: 800px;
            padding: 0px;
            position: relative;
            width: 100%;
          }

          .framer-1tbh41l {
            flex-shrink: 0;
            height: auto;
            position: relative;
            white-space: pre-wrap;
            width: 100%;
            word-break: break-word;
            word-wrap: break-word;
          }

          .framer-1ckfej5 {
            align-content: center;
            align-items: center;
            background-color: var(--token-570a4267-d2d7-4b3b-b047-ddb04643cdc5, rgb(255, 255, 255));
            border-radius: 200px;
            cursor: pointer;
            display: flex;
            flex-direction: row;
            flex-shrink: 0;
            gap: 12px;
            height: min-content;
            justify-content: center;
            overflow: hidden;
            padding: 16px 32px;
            position: relative;
            text-decoration: none;
            width: min-content;
          }

          .framer-12a7uil {
            flex-shrink: 0;
            height: auto;
            position: relative;
            white-space: pre;
            width: auto;
          }

          .framer-1nkymu6 {
            aspect-ratio: 1 / 1;
            flex-shrink: 0;
            height: var(--framer-aspect-ratio-supported, 18px);
            position: relative;
            width: 18px;
          }

          @media (max-width: 809px) {
            .framer-1wklw7r {
              flex-direction: column;
              gap: 0px;
            }

            .framer-182r17l {
              gap: 60px;
              padding: 60px 20px;
            }

            .framer-1qyxjbz {
              gap: 30px;
            }

            .framer-xjqb6z .framer-styles-preset-1b5uiip {
              --framer-font-size: 40px;
            }

            .framer-1b7hbp5 {
              gap: 60px;
              padding: 60px 20px;
            }

            .framer-12d8ks5 {
              gap: 40px;
            }

            .framer-1f7k1m8 {
              gap: 20px;
            }

            .framer-1kl0q5d .framer-styles-preset-1n9yfcx {
              --framer-font-size: 32px;
            }

            .framer-8fhznj {
              flex-direction: column;
              gap: 24px;
            }

            .framer-1idm8ow, .framer-nwhk6n, .framer-nq7wg7 {
              flex: none;
              width: 100%;
            }

            .framer-1idm8ow {
              padding: 32px 24px;
            }

            .framer-nwhk6n, .framer-nq7wg7 {
              padding: 32px 24px;
            }

            .framer-1xh6vvj {
              gap: 60px;
              padding: 60px 20px;
            }

            .framer-1agqe2z {
              gap: 30px;
            }
          }

          @media (min-width: 810px) and (max-width: 1919px) {
            .framer-xjqb6z .framer-styles-preset-1b5uiip {
              --framer-font-size: 56px;
            }

            .framer-1kl0q5d .framer-styles-preset-1n9yfcx {
              --framer-font-size: 40px;
            }
          }
        `
      }} />
      
      <div className="framer-1wklw7r" data-framer-name="Desktop" style={{ display: 'contents' }}>
        <div className="framer-182r17l" data-framer-name="Hero">
          <div className="framer-1qyxjbz" data-framer-name="Content">
            <div className="framer-xjqb6z framer-styles-preset-1b5uiip" data-framer-name="Heading">
              Transforme sua gestão empresarial com o SatXP
            </div>
            <div className="framer-17mqg1c framer-styles-preset-1g8dbr7" data-framer-name="Subtitle">
              A solução completa para automatizar processos, otimizar recursos e impulsionar o crescimento do seu negócio de forma inteligente e eficiente.
            </div>
            <a className="framer-q8v6ya" data-framer-name="CTA" href="#" tabIndex={0}>
              <div className="framer-3p9w3h framer-styles-preset-1ued2lz" data-framer-name="Label">
                Começar agora
              </div>
              <div className="framer-b7o1kz" data-framer-name="Icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  style={{
                    userSelect: 'none',
                    width: '100%',
                    height: '100%',
                    display: 'inline-block',
                    fill: 'rgb(0, 0, 0)',
                    color: 'rgb(0, 0, 0)',
                    flexShrink: 0,
                  }}
                >
                  <g color="rgb(0, 0, 0)" weight="regular">
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </g>
                </svg>
              </div>
            </a>
          </div>
        </div>
        
        <div className="framer-1b7hbp5" data-framer-name="Features">
          <div className="framer-12d8ks5" data-framer-name="Container">
            <div className="framer-1f7k1m8" data-framer-name="Header">
              <div className="framer-1kl0q5d framer-styles-preset-1n9yfcx" data-framer-name="Heading">
                Por que escolher o SatXP?
              </div>
              <div className="framer-ql8irr framer-styles-preset-11w6dks" data-framer-name="Subtitle">
                Conheça os principais benefícios que fazem do SatXP a escolha ideal para sua empresa crescer de forma sustentável e organizada.
              </div>
            </div>
            
            <div className="framer-8fhznj" data-framer-name="Features">
              <div className="framer-1idm8ow" data-framer-name="Feature 1">
                <div className="framer-1kkq5jr" data-framer-name="Icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    style={{
                      userSelect: 'none',
                      width: '100%',
                      height: '100%',
                      display: 'inline-block',
                      fill: 'rgb(255, 255, 255)',
                      color: 'rgb(255, 255, 255)',
                      flexShrink: 0,
                    }}
                  >
                    <g color="rgb(255, 255, 255)" weight="regular">
                      <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path>
                    </g>
                  </svg>
                </div>
                <div className="framer-1v7jh1g framer-styles-preset-vafkoo" data-framer-name="Title">
                  Automação Inteligente
                </div>
                <div className="framer-vqmrnj framer-styles-preset-1kicqzq" data-framer-name="Description">
                  Automatize processos repetitivos e focque no que realmente importa para o crescimento do seu negócio.
                </div>
              </div>
              
              <div className="framer-nwhk6n" data-framer-name="Feature 2">
                <div className="framer-1kqohbt" data-framer-name="Icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    style={{
                      userSelect: 'none',
                      width: '100%',
                      height: '100%',
                      display: 'inline-block',
                      fill: 'rgb(0, 0, 0)',
                      color: 'rgb(0, 0, 0)',
                      flexShrink: 0,
                    }}
                  >
                    <g color="rgb(0, 0, 0)" weight="regular">
                      <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69L52.69,144H208V56a8,8,0,0,1,16,0ZM136,112V64a8,8,0,0,0-16,0v48a8,8,0,0,0,16,0Zm32,0V80a8,8,0,0,0-16,0v32a8,8,0,0,0,16,0Zm32,0V96a8,8,0,0,0-16,0v16a8,8,0,0,0,16,0Z"></path>
                    </g>
                  </svg>
                </div>
                <div className="framer-1l6j5ng framer-styles-preset-1i97mjo" data-framer-name="Title">
                  Relatórios Avançados
                </div>
                <div className="framer-1q3wjlc framer-styles-preset-1lmh3ue" data-framer-name="Description">
                  Tenha insights detalhados sobre seu negócio com relatórios personalizados e análises em tempo real.
                </div>
              </div>
              
              <div className="framer-nq7wg7" data-framer-name="Feature 3">
                <div className="framer-a6vmne" data-framer-name="Icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    focusable="false"
                    style={{
                      userSelect: 'none',
                      width: '100%',
                      height: '100%',
                      display: 'inline-block',
                      fill: 'rgb(0, 0, 0)',
                      color: 'rgb(0, 0, 0)',
                      flexShrink: 0,
                    }}
                  >
                    <g color="rgb(0, 0, 0)" weight="regular">
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>
                    </g>
                  </svg>
                </div>
                <div className="framer-g3ej7l framer-styles-preset-1i97mjo" data-framer-name="Title">
                  Suporte Especializado
                </div>
                <div className="framer-1l0fqvo framer-styles-preset-1lmh3ue" data-framer-name="Description">
                  Nossa equipe está sempre disponível para ajudar você a aproveitar ao máximo todas as funcionalidades.
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="framer-1xh6vvj" data-framer-name="CTA Section">
          <div className="framer-1agqe2z" data-framer-name="Content">
            <div className="framer-1tbh41l framer-styles-preset-1b5uiip" data-framer-name="Heading">
              Pronto para revolucionar sua gestão?
            </div>
            <a className="framer-1ckfej5" data-framer-name="CTA" href="#" tabIndex={0}>
              <div className="framer-12a7uil framer-styles-preset-1ued2lz" data-framer-name="Label">
                Começar agora
              </div>
              <div className="framer-1nkymu6" data-framer-name="Icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  style={{
                    userSelect: 'none',
                    width: '100%',
                    height: '100%',
                    display: 'inline-block',
                    fill: 'rgb(0, 0, 0)',
                    color: 'rgb(0, 0, 0)',
                    flexShrink: 0,
                  }}
                >
                  <g color="rgb(0, 0, 0)" weight="regular">
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </g>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
