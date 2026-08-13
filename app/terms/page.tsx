export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-black mb-8 uppercase tracking-tight">
        Termos de <span className="text-primary">Serviço</span>
      </h1>

      <div className="prose prose-invert max-w-none space-y-6 text-white/70">
        <p>
          Bem-vindo à Central de Plataformas. Ao aceder a este website, assumimos que aceita estes termos de serviço. Não continue a utilizar a Central de Plataformas se não aceitar todos os termos indicados nesta página.
        </p>

        <h2 className="text-2xl font-bold text-white uppercase mt-12">Licença</h2>
        <p>
          Salvo indicação em contrário, a Central de Plataformas e/ou os seus licenciadores detêm os direitos de propriedade intelectual de todo o conteúdo da Central de Plataformas. Todos os direitos de propriedade intelectual estão reservados. Pode aceder a partir da Central de Plataformas para uso pessoal, sujeito às restrições definidas nestes termos de serviço.
        </p>

        <h2 className="text-2xl font-bold text-white uppercase mt-12">Restrições</h2>
        <p>Não deve:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Republicar o conteúdo da Central de Plataformas</li>
          <li>Vender, alugar ou sublicenciar o conteúdo da Central de Plataformas</li>
          <li>Reproduzir, duplicar ou copiar o conteúdo da Central de Plataformas</li>
          <li>Redistribuir o conteúdo da Central de Plataformas</li>
        </ul>

        <h2 className="text-2xl font-bold text-white uppercase mt-12">Aviso Legal</h2>
        <p>
          Na medida máxima permitida pela lei aplicável, excluímos todas as representações, garantias e condições relativas ao nosso website e à utilização deste website. Nada neste aviso legal irá:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>limitar ou excluir a nossa ou a sua responsabilidade por morte ou lesões corporais;</li>
          <li>limitar ou excluir a nossa ou a sua responsabilidade por fraude ou declaração fraudulenta;</li>
          <li>limitar qualquer das nossas ou das suas responsabilidades de uma forma não permitida pela lei aplicável.</li>
        </ul>
      </div>
    </div>
  );
}
