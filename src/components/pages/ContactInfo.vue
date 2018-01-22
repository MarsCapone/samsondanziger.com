<template>
    <div class="contact-info">

      <div class="contact-section">
        <div class="title">contact</div>
        <table>
          <tr class="contact-item">
            <td>emails</td>
            <td>
              <p><a href="mailto:samson@danziger.online">samson@danziger.online</a></p>
              <p><a href="mailto:samson@samsondanziger.com">samson@samsondanziger.com</a></p>
            </td>
          </tr>
          <tr class="contact-item">
            <td>address</td>
            <td>
              <p>31 Great James Street</p>
              <p>London, WC1N 3HB</p>
            </td>
          </tr>
          <tr class="contact-item">
            <td>phone</td>
            <td>+44 7903 51611</td>
          </tr>
        </table>
      </div>

      <div class="contact-section">
        <div class="title">social</div>
        <table>
          <tr class="contact-item">
            <td>github</td>
            <td><a href="https://github.com/marscapone">github.com/marscapone</a></td>
          </tr>
          <tr class="contact-item">
            <td>linkedin</td>
            <td><a href="https://www.linkedin.com/in/samson-danziger">linkedin.com/in/samson-danziger</a></td>
          </tr>
        </table>
      </div>

      <div class="contact-section">
        <div class="contact-item">
          <a href="/static/files/contact.vcf">download contact info</a>
        </div>
        <div class="contact-item">
          <img class="qr" src="/static/files/contact-qr-small.png" alt="contact-info-qr-code">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "contact-info"
    }
</script>

<style lang="scss">

  .contact-info {

    .contact-section {
      margin: 30px auto;

      .qr {
        width: 250px;

        @media screen and (max-width: 700px) {
          width: 60%;
        }
      }

      .title {
        font-size: 1.2em;
      }
    }

    table {
      margin: auto;

      tr.contact-item {

        margin: 10px 0;

        td {
          text-align: left;
          padding: 5px 10px;

          p {
            margin-top: 0;
            margin-bottom: 5px;
          }

          &:first-child {
            text-align: right;
            vertical-align: top;
          }
        }
      }
    }
  }

</style>
