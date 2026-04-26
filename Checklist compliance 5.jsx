Checklist compliance 4

import { useState } from “react”;

const sections = [
{
id: “sociedade”,
icon: “🏢”,
title: “Estrutura Societária e Jurídica”,
color: “#1a3a5c”,
items: [
{ id: “s1”, label: “Razão social e nome fantasia do estabelecimento”, consequencia: “Sem isso, qualquer contrato, notificação ou documento jurídico pode ser invalidado por erro de qualificação da parte. Nome fantasia divergente do registro pode gerar autuações fiscais e confusão em litígios.” },
{ id: “s2”, label: “CNPJ e data de abertura da empresa”, consequencia: “Necessário para consulta de débitos na Receita Federal, verificação de certidões negativas e cálculo de prazos prescricionais de passivos trabalhistas e fiscais anteriores à contratação.” },
{ id: “s3”, label: “Tipo societário: MEI, ME, EPP, LTDA, EIRELI ou outro”, consequencia: “Cada tipo tem limites de faturamento, responsabilidade patrimonial e obrigações distintas. Um MEI que ultrapassa o teto sem regularizar pode ter CNPJ cancelado e passivos fiscais retroativos.” },
{ id: “s4”, label: “Regime tributário atual: Simples Nacional, Lucro Presumido ou Real”, consequencia: “Define quais obrigações acessórias existem, alíquotas aplicáveis e riscos de desenquadramento. Um Simples com faturamento acima do limite pode ser excluído retroativamente, gerando multas pesadas.” },
{ id: “s5”, label: “Cópia do Contrato Social vigente e últimas alterações”, consequencia: “Sem o contrato atualizado, não é possível verificar quem tem poderes de gestão, assinar contratos, abrir contas ou representar a empresa em juízo. Alterações não registradas na Junta são ineficazes perante terceiros.” },
{ id: “s6”, label: “Nome completo, CPF e participação de todos os sócios”, consequencia: “Necessário para verificar se algum sócio tem restrições cadastrais, processos ou dívidas que possam contaminar a empresa via desconsideração da personalidade jurídica ou penhora de quotas.” },
{ id: “s7”, label: “Endereço completo do estabelecimento (CEP, bairro, subprefeitura)”, consequencia: “O endereço define qual subprefeitura fiscaliza, qual vara trabalhista é competente, quais normas de zoneamento se aplicam e se o alvará está coerente com o local de operação real.” },
{ id: “s8”, label: “CNAE principal e secundários cadastrados”, consequencia: “CNAE incorreto ou incompleto pode impedir atividades legítimas, gerar autuações por exercício de atividade não autorizada e afetar enquadramento no Simples Nacional e alíquotas do ISS.” },
{ id: “s9”, label: “A empresa possui filiais ou outros estabelecimentos?”, consequencia: “Filiais não registradas no contrato social ou com alvarás independentes vencidos geram passivos autônomos. Funcionários de filiais têm vínculo com o estabelecimento específico, afetando competência territorial em ações trabalhistas.” },
{ id: “s10”, label: “Há sócios ocultos ou investidores informais?”, consequencia: “Sócios ocultos respondem solidariamente pelas dívidas da sociedade e a ocultação pode configurar fraude. Investidores informais sem contrato podem reivindicar sociedade de fato em juízo, com partilha de ativos.” },
],
},
{
id: “conjuge”,
icon: “👫”,
title: “Situação da Cônjuge / Familiar na Gestão”,
color: “#7b1c1c”,
items: [
{ id: “c1”, label: “A cônjuge consta como sócia no contrato social?”, urgente: true, consequencia: “Se trabalha na empresa sem ser sócia nem empregada registrada, pode reivindicar reconhecimento de sociedade de fato ou vínculo empregatício em juízo, com direito à metade dos ativos ou todas as verbas rescisórias.” },
{ id: “c2”, label: “Possui registro em CTPS como empregada da empresa?”, urgente: true, consequencia: “Cônjuge que trabalha habitualmente sem registro configura relação de emprego não formalizada. Em separação ou dissolução, pode ajuizar ação trabalhista exigindo FGTS, férias, 13º e multas de todo o período trabalhado.” },
{ id: “c3”, label: “Existe algum contrato formal de prestação de serviços?”, urgente: true, consequencia: “Sem contrato, qualquer prestação de serviços pode ser requalificada como vínculo empregatício pela Justiça do Trabalho, gerando passivo retroativo de até 5 anos com todos os encargos trabalhistas.” },
{ id: “c4”, label: “Qual o regime de casamento (comunhão parcial, total, separação)?”, urgente: true, consequencia: “Na comunhão universal, as quotas da empresa integram o patrimônio comum e podem ser partilhadas em divórcio. Na comunhão parcial, bens adquiridos durante o casamento também são partilháveis, incluindo valorização da empresa.” },
{ id: “c5”, label: “Recebe pró-labore, salário ou nenhuma remuneração formal?”, consequencia: “Ausência de remuneração formal para quem trabalha pode ser interpretada como salário tácito em ação trabalhista. Pró-labore sem INSS gera débito previdenciário com multa e juros perante a Receita Federal.” },
{ id: “c6”, label: “Há recolhimento de INSS sobre essa remuneração?”, consequencia: “INSS não recolhido sobre pró-labore ou salário gera autuação fiscal, impossibilidade de emissão de certidão negativa e responsabilidade pessoal do sócio-administrador pela dívida previdenciária.” },
{ id: “c7”, label: “Quais decisões ela toma autonomamente no negócio?”, consequencia: “Autonomia decisória é elemento central para reconhecimento de sócia de fato ou empregada com função de confiança. Define se há subordinação (emprego) ou affectio societatis (sociedade), com consequências patrimoniais opostas.” },
{ id: “c8”, label: “Há outros familiares que trabalham no estabelecimento (filhos, pais etc.)?”, consequencia: “Cada familiar sem vínculo formal é um passivo trabalhista potencial independente. Filhos menores trabalhando podem gerar autuação por trabalho infantil, com multas administrativas e ação civil pública pelo MPT.” },
],
},
{
id: “funcionarios”,
icon: “👥”,
title: “Funcionários e Relações Trabalhistas”,
color: “#1a4a2a”,
items: [
{ id: “f1”, label: “Nome completo, CPF e cargo de cada um dos 4 funcionários”, consequencia: “Sem identificação precisa, não é possível verificar se há processos trabalhistas em curso, calcular tempo de serviço correto ou validar registros em CTPS. Erros de qualificação invalidam documentos rescisórios.” },
{ id: “f2”, label: “Data de admissão de cada funcionário”, consequencia: “A data de admissão define o prazo prescricional de 5 anos retroativos para ações trabalhistas. Admissões não registradas desde o início geram passivo de FGTS, férias e 13º de todo o período omitido.” },
{ id: “f3”, label: “Salário atual de cada funcionário (comparar com piso da categoria)”, consequencia: “Salário abaixo do piso da Convenção Coletiva é ilegal e gera ação de diferenças salariais com reflexo em FGTS, férias e 13º. A empresa pode ser condenada ao pagamento retroativo de 5 anos de diferenças.” },
{ id: “f4”, label: “Jornada de trabalho contratada de cada um (horas/dia e dias/semana)”, consequencia: “Jornada contratual diferente da praticada é a principal fonte de ações por horas extras. Se o contrato diz 6h mas o funcionário trabalha 8h, a empresa deve 2h extras por dia dos últimos 5 anos, com adicional de 50%.” },
{ id: “f5”, label: “Existe sistema de controle de ponto? Qual? (livro, app, eletrônico)”, urgente: true, consequencia: “Empresa com mais de 20 funcionários é obrigada por lei a ter controle de ponto. Sem controle, a Justiça do Trabalho presume verdadeira a jornada alegada pelo empregado, gerando condenação presumida em horas extras.” },
{ id: “f6”, label: “Há horas extras habituais? São pagas ou compensadas como?”, urgente: true, consequencia: “Horas extras habituais não pagas ou compensadas irregularmente geram passivo de até 5 anos. Incorporadas ao salário por mais de 1 ano, integram a remuneração para cálculo de férias, 13º, FGTS e indenizações.” },
{ id: “f7”, label: “Existe banco de horas? Está formalizado por acordo escrito?”, urgente: true, consequencia: “Banco de horas sem acordo escrito individual ou coletivo é inválido. As horas acumuladas são automaticamente convertidas em horas extras com adicional de 50%, podendo gerar passivo expressivo por funcionário.” },
{ id: “f8”, label: “Os funcionários trabalham aos domingos ou feriados? Como é compensado?”, consequencia: “Trabalho em domingo sem folga compensatória na semana gera adicional de 100%. Feriados não compensados ou pagos em dobro configuram violação à CCT e à Lei 605/49, com multa administrativa e passivo judicial.” },
{ id: “f9”, label: “Qual a Convenção Coletiva de Trabalho aplicável? (sindicato da categoria)”, consequencia: “A CCT define pisos, benefícios obrigatórios, adicional de insalubridade e regras específicas do setor. Descumprir a CCT expõe a empresa a ações sindicais coletivas, multas e execuções em favor de todos os funcionários da categoria.” },
{ id: “f10”, label: “Há algum processo trabalhista ativo ou acordo extrajudicial recente?”, consequencia: “Processos ativos revelam padrões de risco e podem conter decisões que vinculam condutas futuras. Acordos extrajudiciais mal homologados podem ser anulados pelo judiciário, reabrindo todas as questões supostamente encerradas.” },
{ id: “f11”, label: “Algum funcionário está em período de aviso prévio, afastamento ou licença?”, consequencia: “Dispensa de funcionário em estabilidade (acidente, doença ocupacional, gestante, membro de CIPA) é nula e gera reintegração ou indenização substitutiva de até 12 meses de salário, além de multas administrativas.” },
{ id: “f12”, label: “Os contratos individuais de trabalho estão assinados e arquivados?”, consequencia: “Contrato não assinado dificulta provar cláusulas essenciais como jornada, salário e função. Em litígio, a versão do empregado prevalece sobre documentos não subscritos por ele.” },
{ id: “f13”, label: “Ficha de registro de cada empregado: está atualizada?”, consequencia: “A ficha de registro é obrigatória por lei (CLT, art. 41). Ausência ou desatualização gera multa administrativa por empregado e prejudica a defesa em ações trabalhistas por dificultar a prova de fatos essenciais.” },
{ id: “f14”, label: “Quem faz a folha de pagamento? É terceirizado (escritório contábil)?”, consequencia: “Erros na folha geram passivos de diferenças salariais, INSS e FGTS com multa e juros. O escritório contábil pode ser corresponsável, mas a empresa responde primariamente perante os órgãos fiscalizadores e a Justiça do Trabalho.” },
{ id: “f15”, label: “Existe pagamento de vale-transporte? Com desconto correto de 6%?”, consequencia: “Vale-transporte é obrigação legal para todo empregado que solicitar (Lei 7.418/85). Não fornecimento gera passivo de reembolso retroativo. Desconto acima de 6% do salário base é ilegal e deve ser restituído.” },
{ id: “f16”, label: “Vale-refeição ou cesta básica: fornecido? Previsto em CCT?”, consequencia: “Se a CCT da categoria prevê vale-refeição ou cesta básica, seu não fornecimento é descumprimento de norma coletiva, gerando ação sindical coletiva e cobrança retroativa de todos os valores devidos com correção.” },
{ id: “f17”, label: “Existe plano de saúde para os funcionários?”, consequencia: “Se previsto na CCT ou em contrato individual, plano de saúde suprimido gera passivo de dano patrimonial e moral. Cancelamento unilateral sem negociação pode ser considerado alteração contratual lesiva (CLT, art. 468).” },
{ id: “f18”, label: “FGTS: recolhimento em dia? Última guia paga?”, consequencia: “FGTS em atraso gera multa de 10% sobre os valores devidos mais juros de mora. O sócio-administrador responde pessoalmente pelo débito. Em rescisão sem quitação do FGTS, a empresa não pode homologar a dispensa regularmente.” },
],
},
{
id: “operacao”,
icon: “🏪”,
title: “Operação do Estabelecimento”,
color: “#2a1a5c”,
items: [
{ id: “o1”, label: “Horário de funcionamento (dias e horas)”, consequencia: “Funcionamento fora do horário autorizado no alvará pode gerar notificação, multa e suspensão das atividades pela Prefeitura. Também define se há necessidade de adicional noturno (após 22h) para funcionários.” },
{ id: “o2”, label: “Quantidade de caixas registradoras / PDVs”, consequencia: “Cada PDV deve emitir NFC-e ou ser equipamento emissor de cupom fiscal autorizado pelo SEFAZ. PDV não credenciado gera autuação fiscal por não emissão de documento fiscal, com multa por operação irregular.” },
{ id: “o3”, label: “Quem opera o caixa? É sempre o mesmo funcionário?”, consequencia: “Ausência de controle sobre o operador de caixa dificulta apuração de desvios e responsabilização. Em caso de desfalque, sem identificação do responsável, a empresa não pode exercer ação regressiva contra o funcionário.” },
{ id: “o4”, label: “Existe sistema de gestão (ERP, software de frente de caixa)? Qual?”, consequencia: “Sistema de gestão sem lacração ou certificação pelo SEFAZ pode ser considerado irregular para fins fiscais. Dados de estoque e vendas podem ser requisitados em fiscalizações e precisam ser íntegros e auditáveis.” },
{ id: “o5”, label: “O estabelecimento possui câmeras de segurança (CFTV)?”, consequencia: “CFTV sem aviso visível viola a LGPD e direitos de personalidade de clientes e funcionários. Imagens podem ser admitidas como prova em processos, mas sua obtenção irregular pode torná-las inadmissíveis e gerar ação de indenização.” },
{ id: “o6”, label: “Quem tem acesso às imagens das câmeras?”, consequencia: “Acesso irrestrito às imagens viola privacidade e pode configurar assédio moral se usado para monitoramento abusivo de funcionários. A LGPD exige controle de acesso e finalidade definida para tratamento de dados por câmera.” },
{ id: “o7”, label: “Área de vendas em m² (relevante para normas de acessibilidade e sanitárias)”, consequencia: “Estabelecimentos acima de determinada metragem têm obrigações específicas de acessibilidade (Lei 10.098/00), número de sanitários, saídas de emergência e capacidade máxima de pessoas, sob pena de interdição pelo Corpo de Bombeiros ou Vigilância Sanitária.” },
{ id: “o8”, label: “Há setor de perecíveis? (açougue, padaria, frios, hortifruti)”, consequencia: “Setores de perecíveis exigem licença sanitária específica, equipamentos certificados para controle de temperatura e funcionários com treinamento em manipulação de alimentos. A ausência dessas condições pode resultar em interdição do setor ou de todo o estabelecimento.” },
{ id: “o9”, label: “Há manipulação de alimentos no local? (preparo, fracionamento)”, consequencia: “Manipulação sem Boas Práticas de Fabricação (BPF) documentada é infração sanitária grave. Em caso de intoxicação alimentar, a empresa responde objetivamente perante o consumidor (CDC) e pode ser alvo de ação civil pública pelo MP.” },
{ id: “o10”, label: “Existe estacionamento ou área de embarque/desembarque?”, consequencia: “Estacionamento de uso do estabelecimento pode exigir licença específica da Prefeitura e implica responsabilidade civil por danos a veículos e clientes. Ausência de sinalização de acessibilidade gera multa administrativa.” },
{ id: “o11”, label: “O estabelecimento é acessível a PCD? (rampa, banheiro adaptado)”, consequencia: “A Lei Brasileira de Inclusão (Lei 13.146/15) exige acessibilidade plena em estabelecimentos abertos ao público. Autuação pela Prefeitura pode gerar multa progressiva e ordem de adequação com prazo, além de ação civil pública.” },
],
},
{
id: “fiscal”,
icon: “🧾”,
title: “Fiscal, Tributário e Financeiro”,
color: “#4a3000”,
items: [
{ id: “fi1”, label: “Emissão de nota fiscal: NF-e, NFC-e ou cupom fiscal? Qual sistema?”, consequencia: “Emissão de nota fiscal por sistema não autorizado pelo SEFAZ/SP é infração grave, com multa de até 100% do valor da operação. A falta de emissão ao consumidor final configura infração ao CDC e ao Código Tributário.” },
{ id: “fi2”, label: “Faturamento mensal médio aproximado (para validar regime tributário)”, consequencia: “Faturamento acima do limite do Simples Nacional sem migração de regime gera tributação retroativa com alíquotas do Lucro Presumido ou Real, acrescida de multas e juros SELIC sobre todo o período irregular.” },
{ id: “fi3”, label: “Há pendências fiscais: débitos na RFB, SEFAZ/SP ou prefeitura?”, consequencia: “Débitos fiscais bloqueiam emissão de certidões negativas, impedem participação em licitações e podem resultar em penhora online de contas bancárias (BACENJUD) e bloqueio de bens. O sócio pode ser incluído pessoalmente na CDA.” },
{ id: “fi4”, label: “Existe contador ou escritório de contabilidade? Contato para integração”, consequencia: “Sem contador identificado, não é possível integrar o sistema de compliance com as obrigações acessórias (SPED, DCTF, eSocial). A responsabilidade técnica pelas declarações fiscais recai sobre o responsável contábil.” },
{ id: “fi5”, label: “O pró-labore do sócio está definido e com INSS recolhido?”, consequencia: “Sócio administrador sem pró-labore definido ou com INSS não recolhido gera débito previdenciário com multa de 75% a 150%. Impede emissão de certidão negativa e pode gerar inscrição em dívida ativa da Receita Federal.” },
{ id: “fi6”, label: “As retiradas de lucros estão devidamente documentadas?”, consequencia: “Retiradas sem documentação podem ser requalificadas como pró-labore pela Receita Federal, incidindo INSS sobre os valores. Em litígios societários ou trabalhistas, servem como prova de faturamento real diferente do declarado.” },
{ id: “fi7”, label: “Qual o controle de caixa atual? Existe fechamento diário documentado?”, consequencia: “Ausência de controle de caixa documentado dificulta a defesa em autuações fiscais por omissão de receita. O Fisco pode arbitrar o faturamento com base em estimativas, gerando tributação sobre valores presumidos, muitas vezes superiores ao real.” },
{ id: “fi8”, label: “Há conta bancária empresarial separada da conta pessoal do sócio?”, urgente: true, consequencia: “Mistura de contas é o principal argumento para desconsideração da personalidade jurídica (art. 50, CC), permitindo que credores atinjam o patrimônio pessoal do sócio. Em ação trabalhista ou fiscal, isso pode resultar em penhora da conta e bens pessoais.” },
{ id: “fi9”, label: “Máquinas de cartão: quem é a operadora? Taxas estão documentadas?”, consequencia: “Sem documentação das taxas, é impossível apurar o custo real de cada venda e o lucro efetivo. Em auditoria fiscal, os valores recebidos via cartão são cruzados com o faturamento declarado; divergências geram presunção de omissão de receita.” },
],
},
{
id: “sanitaria”,
icon: “🩺”,
title: “Vigilância Sanitária e Segurança Alimentar”,
color: “#1a4a4a”,
items: [
{ id: “vs1”, label: “Alvará da Vigilância Sanitária (COVISA/SP): válido? Última renovação?”, urgente: true, consequencia: “Funcionamento sem alvará sanitário válido pode resultar em interdição imediata do estabelecimento, apreensão de mercadorias e multa de até R$ 1,5 milhão (Lei 6.437/77). A responsabilidade é do titular e pode ser pessoal.” },
{ id: “vs2”, label: “Alvará de funcionamento da Prefeitura de SP: válido?”, urgente: true, consequencia: “Alvará vencido ou inadequado para a atividade exercida sujeita o estabelecimento a embargo e interdição pela Prefeitura. Reincidência pode acarretar cancelamento definitivo do alvará e impossibilidade de regularização no mesmo endereço.” },
{ id: “vs3”, label: “Auto de Vistoria do Corpo de Bombeiros (AVCB): válido?”, urgente: true, consequencia: “Sem AVCB válido, o estabelecimento opera em situação irregular que, em caso de incêndio, implica responsabilidade civil e criminal do proprietário pelas vítimas. Seguros de imóvel e responsabilidade civil costumam ser invalidados sem AVCB.” },
{ id: “vs4”, label: “Já sofreu alguma autuação ou interdição pela Vigilância Sanitária?”, consequencia: “Histórico de autuações aumenta a frequência de fiscalizações e o valor das multas em caso de reincidência. Interdições anteriores podem ser usadas como agravante em ações civis públicas e processos administrativos futuros.” },
{ id: “vs5”, label: “Funcionários que manipulam alimentos possuem carteira de saúde?”, consequencia: “Manipulador de alimentos sem exame periódico e carteira de saúde vigente é infração sanitária com multa automática. Em caso de surto alimentar, a ausência de exames pode ser usada para demonstrar negligência e elevar a indenização devida.” },
{ id: “vs6”, label: “Existe controle de temperatura dos refrigeradores? Com registro?”, consequencia: “Ausência de controle de temperatura documentado é infração sanitária e, em caso de intoxicação alimentar de consumidores, elimina a possibilidade de excludente de responsabilidade por culpa exclusiva do consumidor ou caso fortuito.” },
{ id: “vs7”, label: “Há rotina de controle de pragas (dedetização)? Com certificado?”, consequencia: “Estabelecimento alimentício sem laudo de dedetização vigente está sujeito a interdição imediata pela Vigilância Sanitária. Em caso de reclamação de consumidor por presença de pragas, a ausência do certificado configura prova de negligência.” },
{ id: “vs8”, label: “Existe controle de validade formal? Quem é responsável?”, consequencia: “Produto vencido à venda é infração ao CDC (art. 18) e à legislação sanitária. Gera multa, apreensão e descarte obrigatório às custas da empresa. Em casos de dano à saúde do consumidor, a indenização pode incluir dano moral e material.” },
{ id: “vs9”, label: “Há equipamentos de combate a incêndio (extintores)? Vencidos?”, consequencia: “Extintores vencidos ou ausentes invalidam o AVCB e podem gerar interdição imediata. Em caso de sinistro, a seguradora pode negar cobertura e o proprietário responde criminalmente por negligência se houver vítimas.” },
{ id: “vs10”, label: “O lixo e o descarte de produtos vencidos têm destinação adequada?”, consequencia: “Descarte irregular de resíduos pode configurar infração ambiental (Lei 9.605/98) além de sanitária. Produto vencido descartado sem documentação pode ser reaproveitado indevidamente, gerando responsabilidade por recolocação no mercado.” },
],
},
{
id: “consumidor”,
icon: “🛒”,
title: “Relações com Consumidores”,
color: “#3a1a4a”,
items: [
{ id: “co1”, label: “Já houve reclamação no PROCON-SP ou Consumidor.gov.br?”, consequencia: “Reclamações não respondidas geram multas automáticas pelo PROCON. Histórico negativo aumenta probabilidade de fiscalização e pode ser usado como prova de conduta reiterada em ações civis públicas pelo Ministério Público.” },
{ id: “co2”, label: “Existe livro ou canal de reclamações no estabelecimento?”, consequencia: “A ausência de canal de atendimento ao consumidor pode agravar a responsabilidade em processos, pois demonstra descaso. A Lei Paulista 10.177/98 exige livro de reclamações em estabelecimentos, sob pena de multa.” },
{ id: “co3”, label: “Qual a política de troca atual? Está documentada/afixada?”, consequencia: “Política de troca incompatível com o CDC (p.ex., não aceitar troca de produto com defeito em 30 dias) gera autuação pelo PROCON e ação de consumidor. Política não afixada impede sua oposição ao consumidor em litígios.” },
{ id: “co4”, label: “Os preços são expostos em todos os produtos (etiqueta/display)?”, consequencia: “Ausência de preço afixado é infração ao CDC (art. 6º, III) e ao Decreto 5.903/06. Gera multa pelo PROCON e obriga a venda pelo menor preço informado em qualquer meio, mesmo que seja um erro no sistema.” },
{ id: “co5”, label: “Há programa de fidelidade ou cadastro de clientes com dados pessoais?”, consequencia: “Coleta de dados pessoais sem política de privacidade e consentimento viola a LGPD. Multa da ANPD pode chegar a 2% do faturamento do grupo no Brasil, limitado a R$ 50 milhões por infração. Vazamento gera dano moral coletivo.” },
{ id: “co6”, label: “Já houve ação judicial de consumidor contra a empresa?”, consequencia: “Ações judiciais de consumidores revelam padrões de risco repetitivo. Sentença condenatória não cumprida gera penhora de bens. Acúmulo de ações pode ensejar ação coletiva pelo Ministério Público ou Defensoria Pública.” },
],
},
{
id: “fornecedores”,
icon: “🚚”,
title: “Fornecedores e Contratos”,
color: “#1a3a1a”,
items: [
{ id: “fn1”, label: “Quais são os 5 principais fornecedores? (nome, CNPJ, produto)”, consequencia: “Fornecedor com CNPJ irregular pode gerar glosa de créditos fiscais nas notas de entrada, resultando em tributação adicional. Contratos com fornecedores em processo de recuperação judicial exigem atenção especial para evitar interrupção do abastecimento.” },
{ id: “fn2”, label: “Existem contratos escritos com fornecedores ou tudo é verbal/pedido?”, consequencia: “Acordos verbais são válidos mas de difícil prova. Sem contrato escrito, prazo, preço, prazo de pagamento e condições de devolução ficam sujeitos à versão de cada parte em caso de disputa, com risco de cobrança indevida ou perda de mercadoria.” },
{ id: “fn3”, label: “Há acordos de exclusividade ou condições especiais com algum fornecedor?”, consequencia: “Acordos de exclusividade sem prazo definido podem ser denunciados a qualquer tempo, interrompendo o fornecimento. Cláusulas de exclusividade muito restritivas podem configurar prática anticoncorrencial passível de investigação pelo CADE.” },
{ id: “fn4”, label: “Existe algum fornecedor com pagamento em atraso ou disputa comercial?”, consequencia: “Inadimplência com fornecedor pode resultar em protesto, negativação e ação de cobrança com penhora de estoque ou equipamentos. Fornecedor que corta crédito pode paralisar as operações, gerando dano em cascata.” },
{ id: “fn5”, label: “As notas fiscais de entrada são conferidas e arquivadas por 5 anos?”, consequencia: “Nota fiscal de entrada não arquivada impede a comprovação de origem legal da mercadoria em fiscalização. O Fisco pode presumir que o produto veio de fonte irregular e tributar a entrada como omissão de receita ou comércio de mercadoria roubada.” },
],
},
{
id: “lgpd”,
icon: “🔒”,
title: “Proteção de Dados (LGPD) e TI”,
color: “#2a2a1a”,
items: [
{ id: “lg1”, label: “Quais dados pessoais de clientes são coletados? (nome, CPF, e-mail, endereço)”, consequencia: “Coleta de dados sem base legal definida na LGPD é ilegal. A ANPD pode aplicar multa de até 2% do faturamento por infração. Em caso de vazamento, a empresa responde objetivamente pelos danos causados a cada titular afetado.” },
{ id: “lg2”, label: “Onde esses dados ficam armazenados? (planilha, sistema, papel)”, consequencia: “Dados em planilha ou papel sem controle de acesso representam alto risco de vazamento. A LGPD exige medidas técnicas e administrativas de segurança adequadas; sua ausência presume negligência em caso de incidente.” },
{ id: “lg3”, label: “Quem tem acesso a esses dados?”, consequencia: “Acesso irrestrito a dados pessoais por funcionários sem necessidade viola o princípio da necessidade da LGPD. Em caso de vazamento interno, a ausência de controle de acesso responsabiliza a empresa solidariamente com o funcionário infrator.” },
{ id: “lg4”, label: “Existe Wi-Fi aberto ao público no estabelecimento?”, consequencia: “Wi-Fi sem controle de acesso pode ser usado para atividades ilegais, responsabilizando o titular do CNPJ. O Marco Civil da Internet (Lei 12.965/14) exige guarda de logs de conexão por 1 ano, com responsabilidade por não cumprimento.” },
{ id: “lg5”, label: “Já houve episódio de perda ou exposição de dados de clientes ou funcionários?”, consequencia: “Incidente de segurança não comunicado à ANPD e aos titulares dentro de 72 horas é infração autônoma à LGPD. Histórico de incidentes não tratados é agravante em futuros processos administrativos e judiciais.” },
{ id: “lg6”, label: “As câmeras de segurança: há aviso visível de monitoramento?”, consequencia: “Monitoramento por câmera sem aviso visível viola a LGPD e o direito à privacidade dos consumidores e funcionários. As imagens obtidas sem aviso podem ser inadmissíveis como prova e a empresa pode ser condenada a indenizar cada pessoa filmada ilegalmente.” },
],
},
{
id: “historico”,
icon: “⚖️”,
title: “Histórico Jurídico e Passivos”,
color: “#3a0a0a”,
items: [
{ id: “hj1”, label: “A empresa tem processos judiciais ativos? (trabalhista, cível, fiscal)”, urgente: true, consequencia: “Processos ativos representam passivos contingentes que devem ser provisionados. Em fase de execução, podem resultar em penhora online de contas (SISBAJUD), bloqueio de faturamento de cartão e alienação de bens do estabelecimento.” },
{ id: “hj2”, label: “O sócio tem processos pessoais que possam afetar a empresa?”, urgente: true, consequencia: “Dívidas pessoais do sócio podem resultar em penhora de suas quotas na empresa, com ingresso de um credor como sócio ou liquidação forçada das quotas. Processos criminais do sócio podem gerar restrições ao funcionamento do negócio.” },
{ id: “hj3”, label: “Já houve penhora de bens ou bloqueio de conta judicial?”, consequencia: “Histórico de penhoras indica passivos não solucionados que podem retornar. Bloqueios recorrentes comprometem o crédito da empresa junto a fornecedores e instituições financeiras, além de sinalizar má gestão de compliance.” },
{ id: “hj4”, label: “Existe advogado atual? Há contrato de prestação de serviços jurídicos?”, consequencia: “Sem advogado de confiança identificado, a empresa pode perder prazos processuais críticos, resultando em revelia e condenações automáticas. O sistema de compliance pressupõe um canal jurídico ativo para resposta rápida a autuações.” },
{ id: “hj5”, label: “Algum ex-funcionário entrou com reclamação trabalhista nos últimos 2 anos?”, consequencia: “Ações de ex-funcionários revelam padrões sistêmicos de irregularidade. Condenações repetitivas nos mesmos temas (horas extras, FGTS) indicam práticas que precisam ser corrigidas imediatamente para evitar novas ações com os funcionários atuais.” },
{ id: “hj6”, label: “Há dívidas com INSS (DARF) ou FGTS em atraso?”, consequencia: “Dívidas previdenciárias impedem emissão de CND, bloqueiam acesso a linhas de crédito e podem resultar em inscrição na dívida ativa com penhora automática. O sócio-administrador é pessoalmente responsável pelas contribuições não recolhidas.” },
],
},
{
id: “integridade”,
icon: “📋”,
title: “Programa de Integridade e Canal de Denúncias”,
color: “#2a4a6a”,
items: [
{ id: “pi1”, label: “Existe algum Código de Ética ou Código de Conduta formalizado?”, urgente: true, consequencia: “Sem Código de Ética, a empresa não tem como demonstrar cultura de integridade em caso de autuação pela Lei Anticorrupção (12.846/13). O Decreto 11.129/2022 exige código de conduta como elemento obrigatório do Programa de Integridade para fins de atenuação de sanções.” },
{ id: “pi2”, label: “Há canal de denúncias (anônimo ou identificado) para funcionários e terceiros?”, urgente: true, consequencia: “A Lei 14.457/22 tornou obrigatório o canal de denúncias sobre assédio e violência para empresas com CIPA. Sem canal formal, a empresa não pode demonstrar que investigou irregularidades antes de serem escaladas externamente, agravando sua responsabilidade em processos.” },
{ id: “pi3”, label: “Existe política formal de relacionamento com fornecedores e prestadores (due diligence de terceiros)?”, consequencia: “O Decreto 11.129/2022 exige diligências baseadas em risco para contratação e supervisão de terceiros. Fornecedor envolvido em ato ilícito que beneficie a empresa pode gerar responsabilização objetiva da pessoa jurídica contratante pela Lei Anticorrupção.” },
{ id: “pi4”, label: “Há treinamentos periódicos sobre ética, conduta e compliance para os funcionários?”, consequencia: “Sem evidência de treinamentos, a empresa não consegue demonstrar comprometimento da liderança com o Programa de Integridade. O Decreto 11.129/2022 considera ‘treinamentos e ações de comunicação periódicos’ como parâmetro de avaliação do programa, afetando diretamente a redução de sanções.” },
{ id: “pi5”, label: “Existe política de prevenção a assédio moral e sexual no ambiente de trabalho?”, urgente: true, consequencia: “A Lei 14.457/22 obriga empresas com CIPA a implementar medidas de prevenção e combate ao assédio e violência. A ausência de política documentada gera responsabilidade solidária da empresa em ações indenizatórias de vítimas e pode configurar descumprimento de norma coletiva.” },
{ id: “pi6”, label: “Existe política formal de conflito de interesses para sócios e funcionários?”, consequencia: “Sem política de conflito de interesses, o sócio que realiza negócios pessoais concorrentes com a empresa pode não ser responsabilizado internamente. Em litígios societários, a ausência dessa política fragiliza a defesa contra alegações de desvio de clientela ou concorrência desleal.” },
{ id: “pi7”, label: “Há registro de denúncias ou investigações internas ocorridas nos últimos 2 anos?”, consequencia: “Histórico de irregularidades não investigadas formalmente pode ser usado como prova de negligência sistêmica em processos trabalhistas, cíveis e administrativos. Investigações mal conduzidas sem registro adequado podem ser inadmissíveis como prova de boa-fé.” },
{ id: “pi8”, label: “A empresa já foi ou é investigada por órgão público (Ministério do Trabalho, Receita, Vigilância, PROCON)?”, urgente: true, consequencia: “Investigações em curso representam passivos contingentes graves que devem ser conhecidos antes de qualquer implementação de compliance. Qualquer documento elaborado sem esse conhecimento pode ser usado contra a empresa como prova de ciência do ilícito.” },
{ id: “pi9”, label: “Existe política de doações, brindes e hospitalidade para evitar conflitos com agentes públicos?”, consequencia: “A Lei Anticorrupção responsabiliza objetivamente a empresa por atos praticados em seu benefício, ainda que sem autorização expressa. Brindes ou vantagens oferecidos a fiscais ou servidores, mesmo sem intenção corrupta, podem configurar ato lesivo à administração pública com multa de até 20% do faturamento.” },
{ id: “pi10”, label: “Os contratos com fornecedores contêm cláusula anticorrupção e de rescisão por conduta ética?”, consequencia: “Sem cláusula anticorrupção nos contratos, a empresa não pode rescindir o contrato com fornecedor autuado por corrupção sem risco de ação por rescisão imotivada. O Decreto 11.129/2022 exige supervisão baseada em risco de terceiros como parâmetro do Programa de Integridade.” },
],
},
{
id: “esg”,
icon: “🌱”,
title: “ESG — Ambiental, Social e Governança”,
color: “#1a4a2a”,
items: [
{ id: “esg1”, label: “A empresa possui alguma política ou prática ambiental documentada? (descarte de resíduos, energia, embalagens)”, consequencia: “Ausência de gestão ambiental documentada pode dificultar acesso a linhas de crédito com critérios ESG, cada vez mais exigidos por bancos e cooperativas de crédito. O descarte irregular de resíduos configura infração à Lei 9.605/98, com responsabilidade pessoal do administrador.” },
{ id: “esg2”, label: “Há diversidade de gênero, raça ou idade entre os funcionários? A empresa tem ciência da composição do seu quadro?”, consequencia: “O Fórum Econômico Mundial (Measuring Stakeholder Capitalism) e investidores institucionais exigem métricas de diversidade. Empresas sem dados sobre composição do quadro não conseguem demonstrar conformidade com critérios ESG, prejudicando acesso a crédito e contratos com grandes fornecedores.” },
{ id: “esg3”, label: “Existe diferença salarial entre homens e mulheres no mesmo cargo? A empresa tem ciência disso?”, consequencia: “A Lei 14.611/23 obriga empresas com mais de 100 funcionários a publicar relatório de igualdade salarial. Mesmo abaixo desse limite, discriminação salarial por gênero configura violação à CLT e à Constituição, gerando ação trabalhista individual e coletiva com indenização por dano moral.” },
{ id: “esg4”, label: “Há fornecedores com risco de trabalho infantil, análogo ao escravo ou degradante na cadeia produtiva?”, consequencia: “O Decreto 9.571/2018 (Due Diligence de Direitos Humanos) e as métricas ESG do WEF exigem que a empresa conheça e monitore riscos em sua cadeia de fornecimento. Associação com fornecedor flagrado em trabalho análogo ao escravo pode resultar em inscrição da empresa na ‘lista suja’ do MTE.” },
{ id: “esg5”, label: “A empresa possui algum certificado, selo ou participação em programa de responsabilidade social?”, consequencia: “Ausência de qualquer certificação ESG pode excluir a empresa de cadeias de fornecimento de grandes redes e varejistas que exigem padrões mínimos de seus fornecedores. Sem isso, a empresa também não acessa linhas de crédito subsidiadas vinculadas a critérios socioambientais.” },
{ id: “esg6”, label: “Foi feito algum mapeamento dos stakeholders do negócio? (fornecedores, clientes, vizinhança, sindicatos, órgãos públicos)”, consequencia: “Sem mapeamento de stakeholders, a empresa não antecipa conflitos de interesse com grupos que podem paralisar ou prejudicar suas operações. Vizinhança insatisfeita, sindicatos não consultados e órgãos públicos sem interlocução são fontes frequentes de denúncias, autuações e ações coletivas.” },
{ id: “esg7”, label: “A empresa acompanha o impacto de suas operações na comunidade local (ruído, tráfego, odores, geração de lixo)?”, consequencia: “Impactos não monitorados podem gerar ações de vizinhança por perturbação do sossego (art. 1.277 do CC), notificações da Prefeitura por descumprimento de postura municipal e, em casos graves, ação civil pública por dano ambiental ou à saúde coletiva.” },
{ id: “esg8”, label: “A empresa possui alguma meta ou iniciativa voltada à redução de desperdício ou consumo de recursos (água, energia, embalagens)?”, consequencia: “Sem qualquer iniciativa documentada, a empresa não consegue demonstrar preocupação ambiental mínima em auditorias de fornecedores ESG. A ausência de controle de desperdício também representa ineficiência financeira que pode ser explorada em auditorias de gestão de custos.” },
],
},
];

export default function ComplianceChecklist() {
const [checked, setChecked] = useState({});
const [answers, setAnswers] = useState({});
const [expandedSections, setExpandedSections] = useState(
Object.fromEntries(sections.map((s) => [s.id, true]))
);
const [filter, setFilter] = useState(“all”);
const [expandedConsequencias, setExpandedConsequencias] = useState({});
const [showReport, setShowReport] = useState(false);
const [clientName, setClientName] = useState(””);
const [reportDate, setReportDate] = useState(() => new Date().toLocaleDateString(“pt-BR”));
const [advogado, setAdvogado] = useState(””);
const [copiedReport, setCopiedReport] = useState(false);

const toggle = (id) => setChecked((p) => ({ …p, [id]: !p[id] }));
const toggleSection = (id) =>
setExpandedSections((p) => ({ …p, [id]: !p[id] }));
const toggleConsequencia = (e, id) => {
e.stopPropagation();
setExpandedConsequencias((p) => ({ …p, [id]: !p[id] }));
};
const setAnswer = (id, val) => setAnswers((p) => ({ …p, [id]: val }));

const allItems = sections.flatMap((s) => s.items);
const totalDone = allItems.filter((i) => checked[i.id]).length;
const totalUrgente = allItems.filter((i) => i.urgente).length;
const urgenteDone = allItems.filter((i) => i.urgente && checked[i.id]).length;
const pct = Math.round((totalDone / allItems.length) * 100);
const totalAnswered = allItems.filter((i) => answers[i.id] && answers[i.id].trim() !== “”).length;

const getFiltered = (items) => {
if (filter === “urgente”) return items.filter((i) => i.urgente);
if (filter === “pending”) return items.filter((i) => !checked[i.id]);
if (filter === “done”) return items.filter((i) => checked[i.id]);
return items;
};

const sectionDone = (items) => items.filter((i) => checked[i.id]).length;

const generateReportText = () => {
const now = reportDate || new Date().toLocaleDateString(“pt-BR”);
let txt = “”;
txt += “══════════════════════════════════════════════════════════\n”;
txt += “   RELATÓRIO DE INTAKE — DIAGNÓSTICO DE COMPLIANCE\n”;
txt += “══════════════════════════════════════════════════════════\n\n”;
txt += `Cliente/Estabelecimento : ${clientName || "Não informado"}\n`;
txt += `Advogado Responsável    : ${advogado || "Não informado"}\n`;
txt += `Data da Coleta          : ${now}\n`;
txt += `Progresso               : ${pct}% — ${totalDone}/${allItems.length} itens confirmados\n`;
txt += `Itens com resposta      : ${totalAnswered}/${allItems.length}\n`;
txt += `Urgentes confirmados    : ${urgenteDone}/${totalUrgente}\n`;
txt += “\n”;

```
sections.forEach((section) => {
  const hasContent = section.items.some(
    (i) => checked[i.id] || (answers[i.id] && answers[i.id].trim())
  );
  txt += `──────────────────────────────────────────────────────────\n`;
  txt += `${section.icon}  ${section.title.toUpperCase()}\n`;
  txt += `──────────────────────────────────────────────────────────\n`;
  section.items.forEach((item, idx) => {
    const status = checked[item.id] ? "[✓ COLETADO]" : "[  PENDENTE]";
    const urgTag = item.urgente ? " ⚠URGENTE" : "";
    txt += `\n${idx + 1}. ${status}${urgTag}\n`;
    txt += `   Pergunta : ${item.label}\n`;
    const resp = answers[item.id] ? answers[item.id].trim() : "";
    txt += `   Resposta : ${resp !== "" ? resp : "(sem resposta registrada)"}\n`;
  });
  txt += "\n";
});

txt += "══════════════════════════════════════════════════════════\n";
txt += "ITENS URGENTES PENDENTES\n";
txt += "══════════════════════════════════════════════════════════\n";
const urgentPending = allItems.filter((i) => i.urgente && !checked[i.id]);
if (urgentPending.length === 0) {
  txt += "✓ Todos os itens urgentes foram confirmados.\n";
} else {
  urgentPending.forEach((i) => {
    txt += `⚠ ${i.label}\n`;
  });
}
txt += "\n";
txt += "══════════════════════════════════════════════════════════\n";
txt += "ITENS SEM RESPOSTA REGISTRADA\n";
txt += "══════════════════════════════════════════════════════════\n";
const noAnswer = allItems.filter((i) => !answers[i.id] || answers[i.id].trim() === "");
if (noAnswer.length === 0) {
  txt += "✓ Todos os itens possuem resposta registrada.\n";
} else {
  noAnswer.forEach((i) => {
    txt += `— ${i.label}\n`;
  });
}
txt += "\n";
txt += "══════════════════════════════════════════════════════════\n";
txt += "// NOTA AO ADVOGADO\n";
txt += `Este relatório foi gerado automaticamente com base nas respostas\n`;
txt += `coletadas durante a reunião de intake. As informações aqui\n`;
txt += `registradas são confidenciais e destinadas exclusivamente à\n`;
txt += `elaboração do sistema de compliance do cliente.\n`;
txt += "══════════════════════════════════════════════════════════\n";
return txt;
```

};

const copyReport = () => {
const txt = generateReportText();
navigator.clipboard.writeText(txt).then(() => {
setCopiedReport(true);
setTimeout(() => setCopiedReport(false), 2500);
});
};

if (showReport) {
const reportTxt = generateReportText();
return (
<div style={{
minHeight: “100vh”,
background: “linear-gradient(135deg, #0a0e1a 0%, #0d1520 50%, #0a1510 100%)”,
fontFamily: “‘Georgia’, ‘Times New Roman’, serif”,
color: “#e8e0d0”,
}}>
{/* Report Header */}
<div style={{
background: “linear-gradient(90deg, #0d1a2a 0%, #1a2a1a 100%)”,
borderBottom: “2px solid #2a5a2a”,
padding: “20px 32px”,
position: “sticky”,
top: 0,
zIndex: 100,
}}>
<div style={{ maxWidth: 860, margin: “0 auto”, display: “flex”, alignItems: “center”, justifyContent: “space-between”, gap: 16, flexWrap: “wrap” }}>
<div>
<div style={{ fontSize: 10, letterSpacing: 4, color: “#4a9a4a”, textTransform: “uppercase”, fontFamily: “monospace” }}>
RELATÓRIO GERADO
</div>
<div style={{ fontSize: 18, fontWeight: “bold”, color: “#d4e8c4”, marginTop: 2 }}>
Diagnóstico de Compliance
</div>
</div>
<div style={{ display: “flex”, gap: 10, flexWrap: “wrap” }}>
<button
onClick={copyReport}
style={{
padding: “8px 18px”,
borderRadius: 6,
border: “1px solid #2a6a4a”,
background: copiedReport ? “#1a4a2a” : “#0e2a1a”,
color: copiedReport ? “#4acc8a” : “#6acc8a”,
fontSize: 12,
cursor: “pointer”,
fontFamily: “monospace”,
letterSpacing: 0.5,
transition: “all 0.2s”,
}}
>
{copiedReport ? “✓ Copiado!” : “⎘ Copiar texto”}
</button>
<button
onClick={() => setShowReport(false)}
style={{
padding: “8px 18px”,
borderRadius: 6,
border: “1px solid #2a4a2a”,
background: “transparent”,
color: “#6a8a6a”,
fontSize: 12,
cursor: “pointer”,
fontFamily: “monospace”,
letterSpacing: 0.5,
}}
>
← Voltar ao checklist
</button>
</div>
</div>
</div>

```
    {/* Report metadata inputs */}
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "24px 20px 0" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 12,
        marginBottom: 20,
      }}>
        {[
          { label: "Cliente / Estabelecimento", val: clientName, set: setClientName, ph: "Nome do cliente..." },
          { label: "Advogado Responsável", val: advogado, set: setAdvogado, ph: "Nome do advogado..." },
          { label: "Data da Coleta", val: reportDate, set: setReportDate, ph: "dd/mm/aaaa" },
        ].map((f) => (
          <div key={f.label}>
            <div style={{ fontSize: 10, color: "#4a7a4a", fontFamily: "monospace", letterSpacing: 1, marginBottom: 4, textTransform: "uppercase" }}>{f.label}</div>
            <input
              value={f.val}
              onChange={(e) => f.set(e.target.value)}
              placeholder={f.ph}
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "7px 10px",
                background: "#0a140a",
                border: "1px solid #1a3a1a",
                borderRadius: 5,
                color: "#c8d8b8",
                fontSize: 12,
                fontFamily: "'Georgia', serif",
                outline: "none",
              }}
            />
          </div>
        ))}
      </div>

      {/* Stats bar */}
      <div style={{
        display: "flex",
        gap: 12,
        marginBottom: 20,
        flexWrap: "wrap",
      }}>
        {[
          { label: "Progresso geral", val: `${pct}%`, color: "#4acc4a" },
          { label: "Itens confirmados", val: `${totalDone}/${allItems.length}`, color: "#8acc8a" },
          { label: "Com resposta", val: `${totalAnswered}/${allItems.length}`, color: "#8ab8cc" },
          { label: "Urgentes OK", val: `${urgenteDone}/${totalUrgente}`, color: urgenteDone === totalUrgente ? "#4acc4a" : "#cc6644" },
        ].map((s) => (
          <div key={s.label} style={{
            flex: 1,
            minWidth: 120,
            padding: "10px 14px",
            background: "#0a140a",
            border: "1px solid #1a2a1a",
            borderRadius: 6,
            textAlign: "center",
          }}>
            <div style={{ fontSize: 20, fontWeight: "bold", color: s.color, fontFamily: "monospace" }}>{s.val}</div>
            <div style={{ fontSize: 10, color: "#4a6a4a", marginTop: 2, fontFamily: "monospace", letterSpacing: 1 }}>{s.label.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Report text */}
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px 60px" }}>
      <pre style={{
        background: "#060d06",
        border: "1px solid #1a2a1a",
        borderRadius: 8,
        padding: "24px 20px",
        fontSize: 11,
        color: "#8aaa8a",
        lineHeight: 1.8,
        fontFamily: "'Courier New', monospace",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        overflowX: "auto",
      }}>
        {reportTxt}
      </pre>
    </div>
  </div>
);
```

}

return (
<div style={{
minHeight: “100vh”,
background: “linear-gradient(135deg, #0a0e1a 0%, #0d1520 50%, #0a1510 100%)”,
fontFamily: “‘Georgia’, ‘Times New Roman’, serif”,
color: “#e8e0d0”,
padding: “0”,
}}>
{/* Header */}
<div style={{
background: “linear-gradient(90deg, #1a2a1a 0%, #0d1a2a 50%, #1a1a2a 100%)”,
borderBottom: “2px solid #2a5a2a”,
padding: “28px 32px 20px”,
position: “sticky”,
top: 0,
zIndex: 100,
backdropFilter: “blur(10px)”,
}}>
<div style={{ maxWidth: 860, margin: “0 auto” }}>
<div style={{ display: “flex”, alignItems: “flex-start”, justifyContent: “space-between”, flexWrap: “wrap”, gap: 16 }}>
<div>
<div style={{ fontSize: 11, letterSpacing: 4, color: “#4a9a4a”, textTransform: “uppercase”, marginBottom: 6, fontFamily: “monospace” }}>
COMPLIANCE / INTAKE DE DADOS
</div>
<h1 style={{ fontSize: 22, fontWeight: “bold”, color: “#d4e8c4”, margin: 0, lineHeight: 1.2 }}>
Checklist de Coleta de Informações
</h1>
<div style={{ fontSize: 13, color: “#8aaa8a”, marginTop: 4 }}>
Mini Mercado — Diagnóstico para Sistema de Compliance
</div>
</div>

```
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
          {/* Progress */}
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 36, fontWeight: "bold", color: totalDone === allItems.length ? "#4aaa4a" : "#c8d8a8", lineHeight: 1 }}>
              {pct}%
            </div>
            <div style={{ fontSize: 12, color: "#6a8a6a", marginTop: 2 }}>
              {totalDone} / {allItems.length} confirmados · {totalAnswered} com resposta
            </div>
            <div style={{ fontSize: 11, color: urgenteDone === totalUrgente ? "#4aaa4a" : "#cc6644", marginTop: 2 }}>
              ⚠ Urgentes: {urgenteDone}/{totalUrgente}
            </div>
          </div>
          {/* Report button */}
          <button
            onClick={() => setShowReport(true)}
            style={{
              padding: "8px 16px",
              borderRadius: 6,
              border: "1px solid #3a6a5a",
              background: "linear-gradient(90deg, #0e2a1a, #0a1e2a)",
              color: "#6acca0",
              fontSize: 12,
              cursor: "pointer",
              fontFamily: "monospace",
              letterSpacing: 0.5,
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "all 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            📄 Gerar Relatório
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ marginTop: 14, background: "#1a2a1a", borderRadius: 4, height: 6, overflow: "hidden" }}>
        <div style={{
          width: `${pct}%`,
          height: "100%",
          background: "linear-gradient(90deg, #2a7a2a, #4acc4a)",
          borderRadius: 4,
          transition: "width 0.4s ease",
        }} />
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
        {[
          { key: "all", label: "Todos" },
          { key: "urgente", label: `⚠ Urgentes (${totalUrgente})` },
          { key: "pending", label: "Pendentes" },
          { key: "done", label: "Coletados" },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            style={{
              padding: "4px 14px",
              borderRadius: 20,
              border: filter === f.key ? "1px solid #4a8a4a" : "1px solid #2a3a2a",
              background: filter === f.key ? "#1a4a1a" : "transparent",
              color: filter === f.key ? "#8acc8a" : "#5a7a5a",
              fontSize: 12,
              cursor: "pointer",
              fontFamily: "monospace",
              letterSpacing: 0.5,
              transition: "all 0.2s",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  </div>

  {/* Body */}
  <div style={{ maxWidth: 860, margin: "0 auto", padding: "24px 20px 60px" }}>

    {/* Client info strip */}
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 10,
      marginBottom: 20,
    }}>
      {[
        { label: "Cliente / Estabelecimento", val: clientName, set: setClientName, ph: "Nome do cliente..." },
        { label: "Advogado Responsável", val: advogado, set: setAdvogado, ph: "Nome do advogado..." },
        { label: "Data da Coleta", val: reportDate, set: setReportDate, ph: "dd/mm/aaaa" },
      ].map((f) => (
        <div key={f.label}>
          <div style={{ fontSize: 9, color: "#3a6a4a", fontFamily: "monospace", letterSpacing: 1, marginBottom: 4, textTransform: "uppercase" }}>{f.label}</div>
          <input
            value={f.val}
            onChange={(e) => f.set(e.target.value)}
            placeholder={f.ph}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "7px 10px",
              background: "#0a140a",
              border: "1px solid #1a3a1a",
              borderRadius: 5,
              color: "#c8d8b8",
              fontSize: 12,
              fontFamily: "'Georgia', serif",
              outline: "none",
            }}
          />
        </div>
      ))}
    </div>

    {/* Urgent notice */}
    <div style={{
      background: "linear-gradient(90deg, #2a0a0a, #1a0a1a)",
      border: "1px solid #6a2a2a",
      borderLeft: "4px solid #cc4444",
      borderRadius: 8,
      padding: "14px 18px",
      marginBottom: 16,
      fontSize: 13,
      color: "#d4a0a0",
      lineHeight: 1.6,
    }}>
      <strong style={{ color: "#ff8888" }}>⚠ Itens marcados como URGENTE</strong> devem ser coletados antes do primeiro atendimento formal, pois definem risco jurídico imediato e podem alterar completamente a estratégia de implementação.
    </div>

    {/* Legend */}
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginBottom: 20,
      padding: "10px 16px",
      background: "#0a120a",
      border: "1px solid #1a2a1a",
      borderRadius: 6,
      fontSize: 11,
      color: "#5a8a6a",
      fontFamily: "monospace",
      flexWrap: "wrap",
    }}>
      <span>✓ Marque o item quando confirmado</span>
      <span style={{ color: "#2a4a3a" }}>|</span>
      <span>📝 Digite a resposta no campo abaixo de cada pergunta</span>
      <span style={{ color: "#2a4a3a" }}>|</span>
      <span><strong style={{ color: "#7acc9a" }}>?</strong> Ver consequências jurídicas</span>
    </div>

    {sections.map((section) => {
      const filtered = getFiltered(section.items);
      if (filtered.length === 0) return null;
      const done = sectionDone(section.items);
      const sectionPct = Math.round((done / section.items.length) * 100);
      const isExpanded = expandedSections[section.id];

      return (
        <div
          key={section.id}
          style={{
            marginBottom: 20,
            borderRadius: 10,
            overflow: "hidden",
            border: "1px solid #1e2e1e",
            background: "#0c150c",
          }}
        >
          {/* Section header */}
          <div
            onClick={() => toggleSection(section.id)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 18px",
              cursor: "pointer",
              background: `linear-gradient(90deg, ${section.color}33, #0c150c)`,
              borderLeft: `4px solid ${section.color}`,
              userSelect: "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 20 }}>{section.icon}</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: "bold", color: "#d8e8c8" }}>
                  {section.title}
                </div>
                <div style={{ fontSize: 11, color: "#6a8a6a", marginTop: 2, fontFamily: "monospace" }}>
                  {done}/{section.items.length} confirmados
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 60, height: 4, background: "#1a2a1a", borderRadius: 2, overflow: "hidden" }}>
                <div style={{
                  width: `${sectionPct}%`,
                  height: "100%",
                  background: sectionPct === 100 ? "#4acc4a" : "#2a7a2a",
                  borderRadius: 2,
                  transition: "width 0.3s ease",
                }} />
              </div>
              <span style={{ color: "#4a7a4a", fontSize: 14, transform: isExpanded ? "rotate(0deg)" : "rotate(-90deg)", transition: "transform 0.2s" }}>▼</span>
            </div>
          </div>

          {/* Items */}
          {isExpanded && (
            <div style={{ padding: "4px 0 8px" }}>
              {filtered.map((item, idx) => {
                const isDone = checked[item.id];
                const isConsequenciaOpen = expandedConsequencias[item.id];
                const hasAnswer = answers[item.id] && answers[item.id].trim() !== "";

                return (
                  <div key={item.id} style={{
                    borderBottom: idx < filtered.length - 1 ? "1px solid #0f1c0f" : "none",
                  }}>
                    {/* Item row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        padding: "10px 18px 6px",
                        background: isDone ? "#0a1a0a" : "transparent",
                        transition: "background 0.15s",
                      }}
                    >
                      {/* Checkbox */}
                      <div
                        onClick={() => toggle(item.id)}
                        style={{
                          width: 18,
                          height: 18,
                          minWidth: 18,
                          borderRadius: 4,
                          border: isDone ? "2px solid #4acc4a" : item.urgente ? "2px solid #cc5544" : "2px solid #2a4a2a",
                          background: isDone ? "#4acc4a22" : "transparent",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: 2,
                          transition: "all 0.2s",
                          cursor: "pointer",
                          flexShrink: 0,
                        }}>
                        {isDone && <span style={{ color: "#4acc4a", fontSize: 12, lineHeight: 1 }}>✓</span>}
                      </div>

                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: 8, flexWrap: "wrap" }}>
                          {item.urgente && !isDone && (
                            <span style={{
                              fontSize: 9,
                              letterSpacing: 1,
                              color: "#ff8866",
                              background: "#3a0a0a",
                              border: "1px solid #6a2a1a",
                              borderRadius: 3,
                              padding: "1px 6px",
                              fontFamily: "monospace",
                              textTransform: "uppercase",
                              whiteSpace: "nowrap",
                              marginTop: 2,
                            }}>
                              urgente
                            </span>
                          )}
                          <span
                            onClick={() => toggle(item.id)}
                            style={{
                              fontSize: 13,
                              color: isDone ? "#4a7a4a" : "#c8d8b8",
                              textDecoration: isDone ? "line-through" : "none",
                              lineHeight: 1.5,
                              cursor: "pointer",
                            }}>
                            {item.label}
                          </span>
                        </div>
                      </div>

                      {/* Consequencia toggle */}
                      <button
                        onClick={(e) => toggleConsequencia(e, item.id)}
                        title="Ver consequências jurídicas"
                        style={{
                          flexShrink: 0,
                          width: 20,
                          height: 20,
                          borderRadius: 3,
                          border: isConsequenciaOpen ? "1px solid #3a7a4a" : "1px solid #2a4a2a",
                          background: isConsequenciaOpen ? "#0e2a1a" : "transparent",
                          color: isConsequenciaOpen ? "#4acc7a" : "#2a5a3a",
                          fontSize: 11,
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "monospace",
                          fontWeight: "bold",
                          transition: "all 0.2s",
                          lineHeight: 1,
                          padding: 0,
                          marginTop: 2,
                        }}
                      >
                        {isConsequenciaOpen ? "×" : "?"}
                      </button>
                    </div>

                    {/* Answer field */}
                    <div style={{ padding: "4px 18px 10px 48px" }}>
                      <textarea
                        value={answers[item.id] || ""}
                        onChange={(e) => setAnswer(item.id, e.target.value)}
                        placeholder="Digite a resposta do cliente aqui..."
                        rows={2}
                        style={{
                          width: "100%",
                          boxSizing: "border-box",
                          background: hasAnswer ? "#071207" : "#050d05",
                          border: hasAnswer ? "1px solid #1a4a2a" : "1px solid #0f1e0f",
                          borderRadius: 5,
                          color: hasAnswer ? "#a8c8a0" : "#3a5a3a",
                          fontSize: 12,
                          fontFamily: "'Georgia', serif",
                          lineHeight: 1.6,
                          padding: "7px 10px",
                          resize: "vertical",
                          outline: "none",
                          transition: "border 0.2s, color 0.2s",
                        }}
                      />
                    </div>

                    {/* Consequencia panel */}
                    {isConsequenciaOpen && (
                      <div style={{
                        margin: "0 18px 8px 48px",
                        padding: "12px 14px",
                        background: "linear-gradient(90deg, #0a1a10, #080f0a)",
                        border: "1px solid #1a3a22",
                        borderLeft: "3px solid #2a6a3a",
                        borderRadius: 6,
                      }}>
                        <div style={{
                          fontSize: 10,
                          letterSpacing: 2,
                          color: "#3a7a4a",
                          fontFamily: "monospace",
                          textTransform: "uppercase",
                          marginBottom: 6,
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}>
                          <span style={{ fontSize: 12 }}>⚖</span>
                          Consequência jurídica se não coletado
                        </div>
                        <p style={{
                          margin: 0,
                          fontSize: 12,
                          color: "#9abaa4",
                          lineHeight: 1.7,
                          fontFamily: "'Georgia', serif",
                        }}>
                          {item.consequencia}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    })}

    {/* Done message */}
    {pct === 100 && (
      <div style={{
        textAlign: "center",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #0a2a0a, #0a1a0a)",
        border: "1px solid #2a6a2a",
        borderRadius: 12,
        marginTop: 8,
      }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
        <div style={{ fontSize: 18, color: "#4acc4a", fontWeight: "bold", marginBottom: 8 }}>
          Coleta de Dados Completa
        </div>
        <div style={{ fontSize: 13, color: "#6a9a6a", maxWidth: 400, margin: "0 auto", marginBottom: 16 }}>
          Todas as informações foram confirmadas. Gere o relatório para análise e elaboração do sistema de compliance.
        </div>
        <button
          onClick={() => setShowReport(true)}
          style={{
            padding: "10px 24px",
            borderRadius: 6,
            border: "1px solid #3a8a5a",
            background: "linear-gradient(90deg, #0e3a1a, #0a2a2a)",
            color: "#6acca0",
            fontSize: 13,
            cursor: "pointer",
            fontFamily: "monospace",
            letterSpacing: 1,
          }}
        >
          📄 Gerar Relatório Completo
        </button>
      </div>
    )}

    {/* Generate report CTA */}
    <div style={{
      marginTop: 24,
      padding: "18px 20px",
      background: "linear-gradient(90deg, #0a1a12, #0a1018)",
      border: "1px solid #1a3a2a",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap",
    }}>
      <div>
        <div style={{ fontSize: 13, color: "#8acc9a", fontWeight: "bold", marginBottom: 3 }}>
          Relatório de Perguntas e Respostas
        </div>
        <div style={{ fontSize: 11, color: "#4a6a4a", fontFamily: "monospace" }}>
          {totalAnswered} de {allItems.length} respostas registradas · {pct}% confirmados
        </div>
      </div>
      <button
        onClick={() => setShowReport(true)}
        style={{
          padding: "10px 22px",
          borderRadius: 6,
          border: "1px solid #3a7a5a",
          background: "linear-gradient(90deg, #0e3a1a, #0a2a2a)",
          color: "#6acca0",
          fontSize: 13,
          cursor: "pointer",
          fontFamily: "monospace",
          letterSpacing: 0.5,
          whiteSpace: "nowrap",
          transition: "all 0.2s",
        }}
      >
        📄 Gerar Relatório
      </button>
    </div>

    {/* Summary */}
    <div style={{
      marginTop: 16,
      padding: "18px 20px",
      background: "#090f09",
      border: "1px solid #1a2a1a",
      borderRadius: 8,
      fontSize: 12,
      color: "#5a7a5a",
      lineHeight: 1.8,
      fontFamily: "monospace",
    }}>
      <div style={{ color: "#4a7a4a", marginBottom: 6, fontWeight: "bold" }}>// NOTA AO ADVOGADO</div>
      Este checklist cobre 12 áreas e {allItems.length} pontos de informação. Recomenda-se coletar os dados em reunião presencial de 90–120 min com o cliente. Preencha as respostas durante a reunião e gere o relatório ao final para análise e elaboração do sistema de compliance personalizado.
    </div>
  </div>
</div>
```

);
}