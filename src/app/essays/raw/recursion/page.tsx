import TopicEssay from "@/app/components/topicEssay"
import { Metadata } from "next";
import Image from "next/image"

export const metadata: Metadata = {
  title: "Recursion",
};

export default function Recursion() {
  return (
    <div style={{ overflowWrap: 'break-word', width: 500, marginBottom: 100}} >
      <h1 className="text-xl text-green-700 font-bold mb-4">Recursão e busca em árvore binaria</h1>
      <h1 className="text-base text-green-700 font-bold mb-4">22/06/2024</h1>
      <div>
        <TopicEssay topic="Recursão" />
        <p>
        O conceito de recursividade pode ser dito como {'"processo de repetição de um objeto de um jeito similar ao que já fora mostrado"'}, o {'"objeto"'} que iremos utilizar, é uma função, isso significa que ela irá ficar se executando/se chamando, dependendo do que sua regra de negócio faça ou peça. Aqui iremos ver dois exemplos de onde podemos utilizar este conceito, o primeiro em uma busca em uma árvore binaria, e o segundo em uma função que retornará o valor de um número fatorial. 
        </p>
        <br />
        <TopicEssay topic="Árvore Binaria" />
        <p>
        Em uma árvore binaria, temos nodes, ou nós, eles em si, são informações que colocamos em uma ordem, números é um exemplo, e oque faz esses números ser uma árvore binaria, são suas ramificações, ou {'"folhas"'} ou {'"caminhos"'}, elas podem ter duas ramificações, para a esquerda ou para a direita, ou somente uma ramificação, ou nenhuma, não é uma regra; então o quanto de ramificações que o essa árvore terá, vai ser posta de acordo com oque aquela árvore está lidando/guardando. Iniciamos uma árvore binaria por um node root, esse node root sempre tem ramificações, e nunca vem de uma ramificação, ele é sempre o node inicial, então já é pressuposto que ele é o ponto inicial de uma árvore binaria. E aqui vamos ver um pouco mais sobre os tipos de árvores binarias balanceadas. Para entendermos um pouco mais de uma árvore binaria balanceada, ou pelo menos ter noção do que ela é, vamos focar em apenas duas, podemos ver esses exemplos:
        </p>

        <TopicEssay topic="[EXEMPLO 1] - Completa" />
        <Image src={'/essaysImgs/recursion/exemplo1.png'} alt="primeiro exemplo de arvore binaria" width={300} height={300} />
        <TopicEssay topic="[EXEMPLO 2] - Perfeita" />
        <Image src={'/essaysImgs/recursion/exemplo2.png'} alt="segundo exemplo de arvore binaria" width={350} height={300} />
        <p>
        Quais são as diferenças dessas duas? <br />
        No Exemplo 1, temos uma árvore binaria completa, o que significa que todos os níveis são preenchidos, exceto o último, e se ele estiver preenchido, todos os nodes da esquerda que irão estar preenchidos.<br />
        No segundo exemplo, temos uma árvore binaria perfeita, ou perfeitamente balanceada, o que significa que todos os nodes internos devem ter 2 filhos, e todos os nodes devem estar na mesma altura. <br />
        E dá para ver que essas duas árvores têm a lógica dita acima, temos nosso node root em ambas, sendo o node root do exemplo 1 o node de número 30, e no exemplo 2, o node root sendo o node de número 1, e desses nodes tem ramificações.
        </p>

        <br />
        <TopicEssay topic="Árvore binaria de busca (BST - Binary Search Tree)" />
        <p>Uma árvore binaria balanceada pode ou não ser uma BST, mas o que é uma BST? Uma BST pode ser descrita como: para qualquer node N, todos os valores dos nodes da subárvore esquerda de N, são menores que o valor de N, e todos os valores dos nodes na subárvore direita de N, são maiores que o valor de N. Você pode imaginar assim: pense em um triangulo, visto de frente, onde cada ponta significa um node, a ponta inferior da esquerda(node filho da esquerda) sendo A, a ponta centra (node principal) sendo B, e a ponta inferior da direita (node filho da direita) sendo C, pensando na logica acima, teríamos a seguinte expressão: {'A < B < C.'} <br />
        Deixando isso mais palpável pode ter o exemplo do nosso exemplo 1, onde temos nosso node root, que conta como 30, a subárvore a esquerda é um 17, que é menor que 30, e na sua direita, temos um 37, que é maior que o 30, ainda podemos pegar o 17 para ficar um pouco mais claro, a subárvore do node 17 da esquerda, é um 11, que é menor que o 17, e a subárvore da direita é um 19, que é maior que o 17. Isso é importante saber porque vamos ver um código que buscar em uma árvore binaria que tem esse padrão.
        </p>
        <br />
        <p>
        E agora vamos para a parte legal, o código. Como dito antes, vamos usar a recursividade para vermos como uma busca em uma árvore binaria funciona.
        <br />
        <br />
        Primeiro, qual é o resultado que o código deve retornar: <br />
        deve retornar o maior valor/node na posição de n de todos os nodes, lembrando que, como a árvore é balanceada, vamos ter uma lista de todos os nodes, de maneira ascendente, então os números/valores do node vão ser de forma ascendente.
        </p>
        <br />
        <p>
        Para começarmos o código vamos ter uma classe para ter o valor, e o shape do node:
        </p>
        <Image src={'/essaysImgs/recursion/classBinary.png'} alt="classe do node" width={500} height={500} />
        <p>Aqui, o nosso constructor vai receber 3 argumentos, o valor do node, o node da direita, que pode ser nulo, e o node da esquerda, que também pode ser nulo. Para chamarmos essa classe seria deste jeito:</p>
        <pre>
          <code>
            {`
    const root = new Binary(4,
        {value: 8, right..., left: ...},
        {value: 2, right...., left: ...}
      );
            `}
          </code>
        </pre>
        <p>ok, vamos para a função principal, vamos chamá-la de tree.</p>
        <Image src={'/essaysImgs/recursion/initFunctionbst.png'} alt="primeiras linhas da função bst" width={500} height={500} />
        <p>Aqui vemos que a função recebe dois argumentos, o root sendo a nossa árvore binaria, e n, sendo a posição do array do valor que quermos retornar. Temos também uma constante chamada de elements, que inicializa com um array vazio, tendo a tipagem de um node.</p>
        <br />
        <p>E antes de irmos para a nossa função recursiva, temos que dar um nome para ela, e o nome dessa função é <strong>dfs</strong>, e esse nome não é um nome aleatório como tree, ele tem significado, e o significado/conceito é: <strong>{'"A pesquisa em profundidade (Depth First Search - DFS) é um algoritmo para percorrer ou pesquisar estruturas de dados em árvore, ou grafo."'} </strong>Isso é uma função recursiva. A função dessa função é se iniciar do node root, em uma árvore binaria, já é posto qual é o node root, e explorar o máximo possível de nodes/caminhos até chegar onde não tem mais caminho. Depois disso, ele volta, até onde tem um caminho alternativo para ele fazer, se não tiver, a função acaba. Para a função saber qual o caminho que ela deve fazer, isso deve ser pré-ordenado, no nosso caso, a função sempre tende de ir para o lado esquerdo primeiro, explorando ele, e depois que acabaram os nodes desse lado, ele volta passar e explora o node principal de antes, e vê se tem algum caminho para a direito, e se tiver, ele vai para os caminhos do lado direito, repete esse mesmo processo, note que ele volta em nodes anteriores, para ir para outros nodes, um exemplo sobre como o DFS funciona:</p>
        <Image src={'/essaysImgs/recursion/graph.png'} alt="exemplo do grafo que iremos usar" width={500} height={500} />
        <p>Primeiro, quando estamos falando sobre grafo, esse é um grafo (exemplo acima, e não uma binary tree), precisamos falar qual o nosso node root inicial, nesse grafo podemos ver que temos ao todo, 5 nodes, sendo eles, 0, 1, 2, 3 e 4, e podemos ver que cada um deles tem x caminhos, o 0 por exemplo tem caminhos que vão para: 1, 2 e 3, em contra partida, temos o 4, que tem apenas um caminho que vai apenas para o node 3. Sabendo disso vamos começar com o node 0 sendo o nosso node root. Temos que armazenar o valor dos nossos nodes e os caminhos deles, para isso iremos ter um variável como essa:</p>
        <Image src={'/essaysImgs/recursion/constGraph.png'} alt="input do graph" width={300} height={300} />
        <p>Aqui temos uma variável de chave valor, sendo a chave o valor do node, e o valor sendo um array que armazena os valores dos nodes em que nossa chave tem ramificaçoes, que é o tipo desse Graph:</p>
        <Image src={'/essaysImgs/recursion/typeGraph.png'} alt="tipo do input do graph" width={300} height={300} />
        <p>Ok, indo para o nosso codigo, temos o seguinte codigo:</p>
        <Image src={'/essaysImgs/recursion/initFunctiondfs.png'} alt="primeiras linhas da funçao do exemplo do grafo" width={650} height={600} />
        <p>  Aqui inicializamos a nossa função, chamada explore, que tem dois argumentos, sendo eles, graph, que irá vir preenchido com os valores do nosso graph, mais precisamente nesse exemplo com a nossa variável vista acima e o start, sendo o node em que iremos considerar como o nosso node root, como já dito antes, o 0; temos uma variável que se inicial com o tamanho do nosso graph, e todos os indexes desse array estão preenchidos com um false, porque disso? Porque no final não iremos retornar o valor dos nossos nodes, mas sim se ele foi visitado, então temos em mente que sabemos qual o index de cada node no nosso array. Vendo mais adiante ao nosso código, e chegando a nossa função dfs, temos isso:</p>
        <Image src={'/essaysImgs/recursion/functiondfs.png'} alt="funçao dfs do grafo" width={300} height={300} />
        <p>
        Aqui temos temos a nossa função recebendo recendo o nosso node root, mais embaixo podemos ver que a função, é chamada com o nosso start, sendo ele o nosso node root, abaixo, nós sobrescrevemos o false antes colocado naquele index com um true, e descemos para o nosso for loop, onde para cada ramificação daquele node, verificamos se ele ainda não foi visitado, e se ele não estiver sido visitado ele chama nossa função dfs novamente fazendo tudo que falamos anteriormente, sobrescrevendo o false, descendo para o for loop, verificando se os filho já foram visitados, se não... <br />
        Agora como fica o fluxo disso? Vamos pela logica: <br />
        teriamos um array inicial assim: [false, false, false, false, false], todos eles representao algum node, sendo representados pela ordem em que vimos na nossa variavel. O nosso 0, sendo o start, seria o primeiro a ser executado na nossa funçao, a primeira coisa que a funçao faz, é sobrescrever o false no array, entao agora teriamos um array assim: <br />
        [true, false, false, false, false], logo depois no nosso for loop, verificariamos se as suas ramificaçoes foram visitadas, o primeiro seria o 1, o um ainda nao foi visitado, entao nossa funçao se chamaria, agora passando o index do 1. O index do 1, na funçao seria sobrescrito, e nosso array ficaria assim: [true, true, false, false, false], logo depois entraria no nosso for loop, e verificaria se as ramificaçoes do 1 teriam sido visitados, o primeiro a ser visto, é o 0, o 0 já foi visitado, entao ele skipa o if, o proximo seria o 3, o 3 ainda nao foi visitado, e entao a funçao faz todo esse processo denovo, até todos serem visitados. <br />
        Com alguns console.log, poderíamos ver o seguinte resultado: <br />
        <Image src={'/essaysImgs/recursion/resultdfs.png'} alt="resultado da funçao dfs do grafo" width={300} height={300} />
        </p>
        <p> Vendo o mínimo, entendendo o mínimo da recursividade, vamos para o código da nossa busca em uma árvore binaria novamente.
         Nossa função de dfs é está:</p>
        <Image src={'/essaysImgs/recursion/dfsbst.png'} alt="funçao dfs da bst" width={300} height={300} />
        <p>
        [2]Aqui verificamos se no node atual que temos, tem nodes para a esquerda e para a direita, se não tiver apenas adicione-o no nosso array, e encerre a função. Aqui podemos ver que números na nossa árvore se encaixam aqui, como por exemplo: 10, 19, 31 e 38. Eles não mais lugares para ir, então só restam a eles voltarem para o node principal 
<br /><br />
        [3]Aqui vai verificar se no node atual tem caminhos para a direita e para a esquerda, temos como exemplo o node 17, 37, e 30 da nosso árvore, eles tem os dois caminhos
<br /><br />
        [4] Aqui entra a nossa recursividade, vamos tomar de exemplo o node 17. O node 17 tem os dois caminhos, mas como a nossa logica tende priorizar o lado esquerdo, vamos chamar a nossa função novamente, e quando for chamar ela, vai chamar justamente para o node 11, o node 11, tem  apenas 1 caminho, então ele não vai cair no primeiro if, e nem no segundo, e sim no terceiro if, que verifica se apenas o caminho esquerda, e vendo que tem, oque ele vai fazer? vai chamar a função novamente, para o node 10, que é o node do caminho esquerdo do node 11. O node 10, vai cair no primeiro if, porque ele não tem mais caminhos, nem para a direita e nem para a esquerda, ele será adicionado no array, e depois disso, essa função ira se encerrar - função do node 10-, depois disso, retorna para o node 11, o node 11 se adiciona, e encerra a sua funçao tambem..
<br /><br />
        [5] Depois de sair do node 11, ele vai retornar para o node 17, se adicionando no array, e chamando a função novamente depois de se adicionar, para o caminho da direita, que é o caminho que dá no node 19, inicializando a função, ele vai cair no primeiro if, e vai se adicionar, e encerrar a função. Depois disso, voltando ao node 17, como já executou tudo que estava dentro deste if, já passando por todas as suas ramificaçoes, vai encerrar a função também - funçao do node 17-, e vai voltar para o node 30, para se adicionar, e ir para o caminho da direita. Revendo tudo fica assim:\</p>
<br /><br />
      <pre>
        <code>
    {`
  30 < abriu uma função dfs, chamou a função para o seu lado esquerdo
  17 < foi aberto uma função dfs, chamou uma função para o seu lado esquerdo
  11 < foi aberto uma função dfs, chamou a função para o seu lado esquerdo
  10 < foi aberto uma função dfs, não tem nenhuma ramificação, se adicionou, e encerrou sua função
  11 < função do node 10 se encerrou, se adicionou, nao tem caminho para a direita, encerrou sua função
  17 < função do node 11 se encerrou, se adicionou, chama ou função para o lado direito
  19 < foi aberto uma função dfs, não tem nenhuma ramificação, se adicionou, e encerrou sua função
  17 < função do node 19 se encerrou, já não tem caminhos, se encerrou
  30 < função do node 17 se encerrou, se adicionou, chamou uma função para o lado direito
  ...
    `}
        </code>
      </pre>
      <p>
        em si essa função faz só isso. <br />
        agora para o resto do código: <br />
        </p>
        <Image src={'/essaysImgs/recursion/finalbst.png'} alt="primeiro exemplo de arvore binaria" width={500} height={500} />
        <p>
        [6] Vamos adicionar o primeiro o root node na função
<br /><br />
        [7] Vamos verificar se o n, onde é a posição onde queremos retornar, é menor que o tamanho do nosso array, ou se é menor que 0, se for alguma dessas verificações, retornamos um erro
<br /><br />
        [8] vamos retornar o node, na posição requerida.
<br /><br />
        Agora para testarmos, temos que adicionar os nossos nodes:
        </p>
        <Image src={'/essaysImgs/recursion/addnodes.png'} alt="primeiro exemplo de arvore binaria" width={300} height={300} />
        <p>
          E se tudo der certo, nessa nossa árvore que pegamos de exemplo, e com o n sendo quarto maior elemento na nossa árvore binaria, no console deve retornar isso:
        </p>

        <Image src={'/essaysImgs/recursion/resultbst.png'} alt="primeiro exemplo de arvore binaria" width={500} height={300} />
        <p>
        Pronto vimos um exemplo de recursividade em uma busca na árvore binaria, vale a pena lembrar que essa função é feita e funciona perfeitamente onde temos um BST, que lembrando, todos os nodes da esquerda são menores que os node da direita, e o node principal de uma ramificação, é um node/numero que está entre seus dois nodes, isso permite que conseguimos ter um array em forma ascendente, sendo o menor node/numero para o maior node.
<br /><br />
        Agora vamos ver outro exemplo:
<br /><br />
        Fatorial {'"Na matemática, o fatorial de um número natural n, denotado por n!, é o produto de todos os naturais menores ou iguais a n"'} ou seja, é a multiplicação dos números menores que n em sequencia, Por exemplo, o fatorial de 5, ou 5!, é 5 * 4 * 3 * 2 * 1 = 120. Então vamos ver como fica isso em uma função recursiva.
        De cara você pode fazer assim:
        </p>
        <br />
        <pre>
          <code>
{`function factorial(n) {
  return n * factorial(n - 1)
}`}
          </code>
        </pre>
        <br />
        <p>Vendo isso, você pode pensar que isso é bom, mas não, por que aqui vai uma coisa importante sobre recursividade, é importante ter algum tipo de coisa que vai para essa recursão, no exemplo anterior, oque parava os nodes, era que o ifs que acabavam, isso parava a recursão uma hora, mas nesse exemplo atual, se você não fizer uma verificação para o numero, ele vai ir infinitamente, então temos que coloca uma verificação:</p>
        <br />
        <pre>
          <code>
          {`function factorial(n:) {
            if(n === 1) return 1;
           return n * factorial(n - 1)
          }`}
            </code> 
        </pre>
        <br /><br />
        <p>
        Essa função vai executar da seguinte maneira: <br />
        O primeira chamada da função vai executar isso: 5 x 4 <br />
        a segunda isso: 4 x 3 <br />
        a terceira isso: 3 x 2 <br />
        a quanta isso: 2 x 1 <br />
        e por fim a ultima isso: 1 <br />
        E a função vai retornar o valores de trás para frente, então a função vai retornar assim: <br />
        Fatorial: 1 <br />
        Fatorial: 2 x 1 = 2 <br />
        Fatorial: 2 x 3 = 6 <br />
        Fatorial: 6 x 4 = 24 <br />
        Fatorial: 24 x 5 = 120 <br />
        E assim acabar a recursividade <br />
        </p>
        <br />
        código da busca na árvore binaria: <br /><br />
        <pre>
      <code>
        {`
          class Binary {
            value: number;
            right: Binary | null;
            left: Binary | null;
            constructor(value: number, right: Binary | null, left: Binary | null) {
              this.value = value;
              this.right = right;
              this.left = left;
            }
          }

          function tree(root: Binary, n: number) {
            const elements: Binary[] = [];
            
            function dfs(root: Binary) {
              if (!root.left && !root.right) {
                elements.push(root);
                return;
              }
              
              if (root.left && root.right) {
                dfs(root.left);
                elements.push(root);
                dfs(root.right);
                return;
              } else if (root.left) {
                dfs(root.left);
                elements.push(root);
              } else if (root.right) {
                elements.push(root);
                dfs(root.right);
              }
            }
            dfs(root);
            if (elements.length < n || n <= 0)
              throw new Error("N needs to be a positive integer and less than or equal to the number of elements in the tree");

            const n_largest = elements[elements.length - n];

            console.log({ n_largest });
            console.log({ elements });
            return n_largest;
          }

          const node10 = new Binary(10, null, null);
          const node11 = new Binary(11, null, node10);
          const node19 = new Binary(19, null, null);
          const node17 = new Binary(17, node19, node11);
          const node31 = new Binary(31, null, null);
          const node38 = new Binary(38, null, null);
          const node37 = new Binary(37, node38, node31);
          const root = new Binary(30, node37, node17);
          tree(root, 4);
        `}
      </code>
    </pre>
    código do grafo:
    <pre>
      <code>
        {`
        type Graph = {
          [key: number] : number[];
        };
        
        function explore(graph: Graph, start: number) {
          const visited: boolean[] = new Array(Object.keys(graph).length).fill(false);
        
          function dfs(v: number) {
            visited[v] = true;
            for (const w of graph[v]) {
              if (!visited[w]) {
                dfs(w);
              }
            }
          }
        
          dfs(start);
          return visited
        }
        
        const graph: Graph = {
          0: [1, 2, 3],
          1: [0, 3],
          2: [0, 3],
          3: [0, 1, 2, 4],
          4: [3]
        };
        explore(graph, 0);
        `}
      </code>
    </pre>
<br /><br />

        <p>
        Isso foi inspirado em um vídeo do Augusto Galego, onde eu não estava assimilando muito bem o conteúdo, e quis procurar mais para saber sobre, então fiz isso aqui para deixar registrado, vídeo em questão: <a className="text-blue-700 hover:text-purple-900" href="https://www.youtube.com/watch?v=6HP_9pP7BHE">link do video</a>
        </p>

      </div>
    </div>
  )
}