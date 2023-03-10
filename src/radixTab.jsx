import * as Tabs from "@radix-ui/react-tabs";

export const RadixTab = () => (
  <div className="w-[50rem] h-[30rem] mx-auto border my-[10rem]">
    <Tabs.Root>
      <Tabs.List>
        <Tabs.Trigger
          value="tab1"
          className="bg-tab_glay py-[1rem] px-[2rem] focus:bg-white border-r-[0.3rem] border-white"
        >
          ランチ
        </Tabs.Trigger>
        <Tabs.Trigger
          value="tab2"
          className="bg-tab_glay py-[1rem] px-[2rem] focus:bg-white border-r-[0.3rem] border-white"
        >
          ドリンク
        </Tabs.Trigger>
        <Tabs.Trigger
          value="tab1"
          className="bg-tab_glay py-[1rem] px-[2rem] focus:bg-white border-r-[0.3rem] border-white"
        >
          ランチ
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="TabsContent" value="tab1">
        <p className="Text">
          Make changes to your account here. Click save when you're done.
        </p>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input className="Input" id="name" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Username
          </label>
          <input className="Input" id="username" />
        </fieldset>
        <div
          style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
        >
          <button className="Button green">Save changes</button>
        </div>
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="tab2">
        <p className="Text">
          Change your password here. After saving, you'll be logged out.
        </p>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="currentPassword">
            Current password
          </label>
          <input className="Input" id="currentPassword" type="password" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="newPassword">
            New password
          </label>
          <input className="Input" id="newPassword" type="password" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="confirmPassword">
            Confirm password
          </label>
          <input className="Input" id="confirmPassword" type="password" />
        </fieldset>
        <div
          style={{ display: "flex", marginTop: 20, justifyContent: "flex-end" }}
        >
          <button className="Button green">Change password</button>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  </div>
);
